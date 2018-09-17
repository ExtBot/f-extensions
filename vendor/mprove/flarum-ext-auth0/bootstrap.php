<?php
/**
 * Created by IntelliJ IDEA.
 * Date: 15.08.2017
 * Time: 19:21
 */

use Mprove\Auth\Auth0\Listener;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listener\AddClientAssets::class);
    $events->subscribe(Listener\AddAuth0AuthRoute::class);
    $events->subscribe(Listener\AddApiAttributes::class);
};


