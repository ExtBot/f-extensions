<?php

/*
 * (c) Sajjad Hashemian <wolaws@gmail.com>
 */

namespace Sijad\Links\Listener;

use Flarum\Api\Controller\ShowForumController;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Api\Event\WillGetData;
use Flarum\Event\GetApiRelationship;
use Flarum\Api\Event\WillSerializeData;
use Flarum\Settings\SettingsRepositoryInterface;
use Sijad\Links\Api\Serializer\LinkSerializer;
use Sijad\Links\Link;
use Illuminate\Contracts\Events\Dispatcher;

class AddLinksRelationship
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(GetApiRelationship::class, [$this, 'GetApiRelationship']);
        $events->listen(WillSerializeData::class, [$this, 'WillSerializeData']);
        $events->listen(WillGetData::class, [$this, 'includeLinksRelationship']);
    }

    /**
     * @param WillSerializeData $event
     */
    public function GetApiRelationship(GetApiRelationship $event)
    {
        if ($event->isRelationship(ForumSerializer::class, 'links')) {
            return $event->serializer->hasMany($event->model, LinkSerializer::class, 'links');
        }
    }

    /**
     * @param WillSerializeData $event
     */
    public function WillSerializeData(WillSerializeData $event)
    {
        if ($event->isController(ShowForumController::class)) {
            $event->data['links'] = Link::get();
        }
    }

    /**
     * @param WillGetData $event
     */
    public function includeLinksRelationship(WillGetData $event)
    {
        if ($event->isController(ShowForumController::class)) {
            $event->addInclude(['links']);
        }
    }
}
