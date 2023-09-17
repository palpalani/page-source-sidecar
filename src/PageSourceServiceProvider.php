<?php

namespace Palpalani\PageSource;

use Palpalani\PageSource\Commands\PageSourceCommand;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class PageSourceServiceProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        /*
         * This class is a Package Service Provider
         *
         * More info: https://github.com/spatie/laravel-package-tools
         */
        $package
            ->name('page-source-sidecar')
            ->hasConfigFile()
            ->hasViews()
            ->hasMigration('create_page-source-sidecar_table')
            ->hasCommand(PageSourceCommand::class);
    }
}
