<?php

namespace Webbinaro\AdkHomepage\Controller;

use Flarum\Frontend\Document;
use Flarum\Api\Controller\ListDiscussionsController;
use Flarum\Api\Client;
use Flarum\User\User;
use Flarum\Extension\ExtensionManager;
use Psr\Http\Message\ServerRequestInterface;
use Symfony\Component\Translation\TranslatorInterface;
use Flarum\Tags\TagRepository;
use Illuminate\Support\Arr;

class AdkHomepageController
{
    public function __construct(Client $api, TagRepository $tagRepository, TranslatorInterface $translator, ExtensionManager $extensionManager)
    {
        $this->api = $api;
        $this->translator = $translator;
        $this->tagRepository = $tagRepository;
        $this->extensionManager = $extensionManager;
    }

    public function __invoke(Document $document, ServerRequestInterface $request)
    {
        $queryParams = $request->getQueryParams();

        if(class_exists("V17Development\FlarumSeo\Extend")) {
            \V17Development\FlarumSeo\Extend::setTitle($this->translator->trans('v17development-flarum-blog.forum.blog'));
        }

        $blogQ = "";
        
        // Add language support
        if($this->extensionManager->isEnabled("fof-discussion-language")) {
            $blogQ = "language:{$document->language} ";
        }

        $blogQ .= "is:blog" . (Arr::get($queryParams, 'category') ? " tag:" . Arr::get($queryParams, 'category') : "");

        // Preload blog posts
        $blogDiscussions = $this->getApiDocument($request->getAttribute('actor'), [
            "filter" => [
                "q" => $blogQ
            ],
            "sort" => "-createdAt",
            "limit" => "3",
        ]);
         // Preload blog posts
        $recentDiscussions = $this->getApiDocument($request->getAttribute('actor'), [
            "sort" => "-lastPostedAt",
            "limit" => "50",
            "include" => "lastPost"
        ]);
        //var_dump($recentDiscussions);
        // Set payload
        $bothDatas = array_replace_recursive($blogDiscussions->data,$recentDiscussions->data);
        $bothIncluded = array_replace_recursive($blogDiscussions->included,$recentDiscussions->included);

        $merged = (object)[
            "links"=>$recentDiscussions->links,
            "data"=>$bothDatas,
            "included"=>$bothIncluded
        ];

        $document->payload['apiDocument'] = $merged;

        return $document;
    }

    /**
     * Preload blog posts
     *
     * @param User  $actor
     * @param array $params
     *
     * @return object
     */
    private function getApiDocument(User $actor, array $params)
    {
        $response = $this->api->send(ListDiscussionsController::class, $actor, $params);

        // Unfortunately there were no records found
        if ($response->getStatusCode() === 404) {
            return null;
        }

        return json_decode($response->getBody());
    }
}