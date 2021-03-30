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
use Flarum\Frontend\Document;
use Psr\Http\Message\ServerRequestInterface as Request;

return [
   (new Extend\Frontend('forum'))
    ->js(__DIR__.'/js/dist/forum.js')
    ->css(__DIR__ . '/less/Forum.less')
    ->route('/adkhome', 'adkhomepage',AdkHomepageController::class)

    ->content(function (Document $document, Request $request) {
        //var_dump($request);

        $conversionScript = <<<'EOS'
            <!-- Event snippet for Sign-up conversion page
            In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
            <script>
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-1066146344/bkTgCIa8j_wBEKi0sPwD',
                  'event_callback': callback
              });
              return false;
            }
            </script>
            EOS;
        $document->head[] = '<script>gtag(\'config\', \'AW-1066146344\');</script>';
        $document->head[] = $conversionScript;
    })
        
    ,
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__ . '/less/Admin.less'),

    new Extend\Locales(__DIR__ . '/locale'),
];
