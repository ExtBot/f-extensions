<?php

namespace Mprove\Auth\Auth0;

use Flarum\Forum\AuthenticationResponseFactory;
use Flarum\Http\Controller\ControllerInterface;
use Flarum\Settings\SettingsRepositoryInterface;
use Psr\Http\Message\ServerRequestInterface as Request;
use Zend\Diactoros\Response\RedirectResponse;
use Flarum\Core\User;

use Auth0\SDK\Auth0;


class Auth0AuthController implements ControllerInterface {
    /**
     * @var AuthenticationResponseFactory
     */
    protected $authResponse;

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param AuthenticationResponseFactory $authResponse
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(AuthenticationResponseFactory $authResponse, SettingsRepositoryInterface $settings) {
        $this->authResponse = $authResponse;
        $this->settings = $settings;
    }

    /**
     * @param Request $request
     * @return \Psr\Http\Message\ResponseInterface|RedirectResponse
     */
    public function handle(Request $request) {
        $redirectUri = (string) $request->getAttribute('originalUri', $request->getUri())->withQuery('');

        $auth = new Auth0([
            'domain' => $this->settings->get('mprove-auth0.domain'),
            'client_id' => $this->settings->get('mprove-auth0.client_id'),
            'client_secret' => $this->settings->get('mprove-auth0.client_secret'),
            'redirect_uri' => $redirectUri,
            'audience' => $this->settings->get('mprove-auth0.domain') . '/userinfo',
            'persist_id_token' => true,
            'persist_access_token' => true,
            'persist_refresh_token' => true,
        ]);

        $session = $request->getAttribute('session');
        $userInfo = $auth->getUser();
        // check user and create if not exist
        if ( is_null(User::where('email', $userInfo['email'])->first() ) ) {
            $user = User::register(
                $userInfo['nickname'],
                $userInfo['email'],
                md5(time() . $userInfo['nickname'] . $userInfo['email'])
            );

            $user->is_activated = 1;
            $user->save();
        }

        // set the id token to cookies for 30 days
        setcookie('token', $auth->getIdToken(), time()+60*60*24*30, '/');

        $identification = ['email' => $userInfo['email']]; // identificate user by email
        $suggestions = [
            'username' => $userInfo['nickname'],
            'avatarUrl' => $userInfo['picture']
        ];

        if ( !$suggestions['username'] ) {
            $suggestions['username'] = explode('@', $userInfo['email'])[0];
        }

        return $this->authResponse->make($request, $identification, $suggestions);
    }
}

