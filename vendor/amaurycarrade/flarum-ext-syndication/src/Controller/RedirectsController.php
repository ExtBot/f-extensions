<?php
/**
 * Copyright or © or Copr. flarum-ext-syndication contributor : Amaury
 * Carrade (2016)
 *
 * https://amaury.carrade.eu
 *
 * This software is a computer program whose purpose is to provides RSS
 * and Atom feeds to Flarum.
 *
 * This software is governed by the CeCILL-B license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL-B
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 *
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 *
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 *
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL-B license and that you accept its terms.
 */

namespace AmauryCarrade\FlarumFeeds\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\RedirectResponse;


class RedirectsController implements RequestHandlerInterface
{
    /**
     * Handles a request and produces a response.
     *
     * May call other collaborating code to generate the response.
     *
     * @param ServerRequestInterface $request
     * @return ResponseInterface
     */
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $path = strtolower($request->getUri()->getPath());
        $type = starts_with($path, '/atom') ? 'atom': 'rss';

        $target = null;

        $queryParams = $request->getQueryParams();
        $tag_slug = array_get($queryParams, 'tag');

        if ($tag_slug != null)
        {
            $target = '/' . $type . '/t/' . $tag_slug . '/discussions';
        }
        else
        {
            $target = '/' . $type . '/discussions';
        }

        return new RedirectResponse($target, 301);
    }
}
