<?php

namespace Reflar\twofactor\Api\Controllers;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class OneTouchCallbackController extends AbstractShowController
{
    public $serializer = 'Reflar\twofactor\Api\Serializers\TwoFactorSerializer';


    /**
     * @param ServerRequestInterface $request
     * @param Document $document
     *
     * @return mixed|void
     */
    public function data(ServerRequestInterface $request, Document $document)
    {
        $serverParams = $request->getServerParams();
        $nonce = $serverParams['HTTP_X_AUTHY_SIGNATURE_NONCE'];
        $method = $serverParams['REQUEST_METHOD'];
        $proto = isset($serverParams['HTTPS']) ? "https" : "http";
        $url = "{$proto}://{$serverParams[HTTP_HOST]}{$serverParams[REQUEST_URI]}";

        $data = normalizeArray($request->getParsedBody());

        $query = http_build_query($data);
        $exploded = explode('&', $query);
        sort($exploded);
        $params = implode('&', $exploded);

        $data = "$nonce|$method|$url|$params";

        $computedSig = base64_encode(hash_hmac('sha256', $data, app(SettingsRepositoryInterface::class)->get('reflar.twofactor.authy_api_key'), true));

        $sig = $serverParams['HTTP_X_AUTHY_SIGNATURE'];

        if (hash_equals($computedSig, $sig)) {
            $user = User::where('authy_id', '=', $data['authy_id'])->firstOrFail();

            if(isset($user)) {
                $user->authy_status = $data['status'];
                $user->save();

                return "ok";
            } else {
                return "invalid";
            }
        }
    }
}