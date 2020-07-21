<?php

/*
 * This file is part of reflar/webhooks.
 *
 * Copyright (c) ReFlar.
 *
 * https://reflar.redevs.org
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Reflar\Webhooks\Adapters\MicrosoftTeams;

use Flarum\Http\UrlGenerator;
use Reflar\Webhooks\Response;
use function SSNepenthe\ColorUtils\color;

class Adapter extends \Reflar\Webhooks\Adapters\Adapter
{
    /**
     * {@inheritdoc}
     */
    const NAME = 'microsoft-teams';

    /**
     * {@inheritdoc}
     */
    protected $exception = TeamsException::class;

    /**
     * Sends a message through the webhook.
     *
     * @param string   $url
     * @param Response $response
     *
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function send(string $url, Response $response)
    {
        if (!isset($response)) {
            return;
        }

        $color = color($this->settings->get('theme_primary_color'));

//        dd($color->toHexString());

        $this->request(
            $url,
            [
                '@context'   => 'https://schema.org/extensions',
                '@type'      => 'MessageCard',
                'themeColor' => $color->getRgb()->toHexString(),

                'title'         => $this->settings->get('forum_title'),
                'text'          => $response->getExtraText(),
                'summary'       => $response->title,

                'sections' => [
                    $this->toArray($response),
                ],
            ]
        );
    }

    /**
     * @param Response $response
     *
     * @return array
     */
    public function toArray(Response $response)
    {
        $user = app(UrlGenerator::class)->to('forum')->route('user', ['username' => $response->author->username]);

        return [
            'title' => $response->title,

            'activityImage'    => $response->author->avatar_url,
            'activityTitle'    => $response->author->display_name,
            'activitySubtitle' => "[$user]($user)",
            'activityText'     => $response->description,

            'potentialAction' => [[
                '@type'   => 'OpenUri',
                'name'    => 'View',
                'targets' => [[
                    'os'  => 'default',
                    'uri' => $response->url,
                ]],
            ]],
        ];
    }

    /**
     * @param string $url
     *
     * @return bool
     */
    public static function isValidURL(string $url): bool
    {
        return preg_match('/^https:\/\/outlook\.office\.com\/webhook\/\S+@\S+\/IncomingWebhook\/\S+\/\S+$/i', $url);
    }
}
