<?php

namespace FoF\Masquerade\Api\Controllers;

use FoF\Masquerade\Api\Serializers\FieldSerializer;
use FoF\Masquerade\Repositories\FieldRepository;
use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class FieldIndexController extends AbstractListController
{
    public $serializer = FieldSerializer::class;

    protected $fields;

    public function __construct(FieldRepository $fields)
    {
        $this->fields = $fields;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $request->getAttribute('actor')->assertAdmin();

        return $this->fields->all();
    }
}
