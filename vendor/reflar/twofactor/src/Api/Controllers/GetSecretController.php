<?php

namespace Reflar\twofactor\Api\Controllers;

use Flarum\Api\Controller\AbstractCollectionController;
use Psr\Http\Message\ServerRequestInterface;
use Reflar\twofactor\TwoFactor;
use Tobscure\JsonApi\Document;

class GetSecretController extends AbstractCollectionController
{
    public $serializer = 'Reflar\twofactor\Api\Serializers\TwoFactorSerializer';

    /**
     * @var TwoFactor
     */
    private $twoFactor;

    /**
     * @param TwoFactor $twoFactor
     */
    public function __construct(TwoFactor $twoFactor)
    {
        $this->twoFactor = $twoFactor;
    }

    /**
     * @param ServerRequestInterface $request
     * @param Document               $document
     *
     * @return array
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        $url = $this->twoFactor->getURL($actor);

        return [
            $actor,
            $url,
        ];
    }
}
