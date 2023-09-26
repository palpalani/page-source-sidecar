<?php

namespace Palpalani\PageSource;

use Hammerstone\Sidecar\LambdaFunction;
use Hammerstone\Sidecar\Package;
use Hammerstone\Sidecar\Runtime;

class PageSourceFunction extends LambdaFunction
{
    public function handler(): string
    {
        return 'sidecar.handle';
    }

    public function name(): string
    {
        return 'PageSource';
    }

    public function package(): Package
    {
        return Package::make()
            ->setBasePath(__DIR__.'/../lambda')
            ->include('*');
    }

    public function runtime(): string
    {
        return Runtime::NODEJS_16;
    }

    public function layers(): array
    {
        return [
            'arn:aws:lambda:us-west-2:764866452798:layer:chrome-aws-lambda:38',
        ];
    }
}
