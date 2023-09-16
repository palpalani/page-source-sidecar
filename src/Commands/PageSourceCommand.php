<?php

namespace Palpalani\PageSource\Commands;

use Illuminate\Console\Command;

class PageSourceCommand extends Command
{
    public $signature = 'page-source-sidecar';

    public $description = 'My command';

    public function handle(): int
    {
        $this->comment('All done');

        return self::SUCCESS;
    }
}
