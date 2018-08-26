<?php

use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Event\ConfigureClientView;
use Flarum\Event\ConfigureForumRoutes;
use Tristiank3604\PartialdevFlarumUi\Http\Controllers\PartialdevFlarumUiController;

return function (Dispatcher $events) {
    $events->listen(ConfigureClientView::class, function (ConfigureClientView $event) {
        if ($event->isForum()) {
            $event->addAssets(__DIR__.'/resources/less/forum/extension.less');
            $event->addAssets(__DIR__.'/js/forum/dist/extension.js');
            $event->addBootstrapper('tristiank3604/partialdev-flarum-ui/main');
        }
    });

    $events->listen(ConfigureForumRoutes::class, function(ConfigureForumRoutes $routes) {
        $routes->get('/partialdev-flarum-ui-homepage', 'partialdev-flarum-ui.homepage', PartialdevFlarumUiController::class);
    });
};