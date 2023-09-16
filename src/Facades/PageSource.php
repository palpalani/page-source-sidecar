<?php

namespace Palpalani\PageSource\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Palpalani\PageSource\PageSource
 */
class PageSource extends Facade
{
    protected static function getFacadeAccessor()
    {
        return \Palpalani\PageSource\PageSource::class;
    }
}
