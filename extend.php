<?php

namespace Webbinaro\AdkHomepage;

// Laravel
use Illuminate\Events\Dispatcher;

// Flarum classes
use Flarum\Api\Controller as FlarumController;
use Flarum\Api\Serializer\BasicDiscussionSerializer;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Extend;
use Flarum\Discussion\Discussion;
use Flarum\Discussion\Event\Saving;
use Flarum\Discussion\Event\Searching;
use Webbinaro\AdkHomepage\Controller\AdkHomepageController;


return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__ . '/less/Forum.less')
        ->route('/adkhome', 'adkhomepage',AdkHomepageController::class)
        // ->get('/blog/rss.xml', 'blog.rss.xml', RSS::class)
    ,
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__ . '/less/Admin.less'),


    new Extend\Locales(__DIR__ . '/locale'),

   
];
