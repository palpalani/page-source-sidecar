# Page Source Sidecar

[![Latest Version on Packagist](https://img.shields.io/packagist/v/palpalani/page-source-sidecar.svg?style=flat-square)](https://packagist.org/packages/palpalani/page-source-sidecar)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/palpalani/page-source-sidecar/run-tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/palpalani/page-source-sidecar/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/actions/workflow/status/palpalani/page-source-sidecar/fix-php-code-style-issues.yml?branch=main&label=code%20style&style=flat-square)](https://github.com/palpalani/page-source-sidecar/actions?query=workflow%3A"Fix+PHP+code+style+issues"+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/palpalani/page-source-sidecar.svg?style=flat-square)](https://packagist.org/packages/palpalani/page-source-sidecar)

Get the Html source content of any given url using Laravel Sidecar.

## Installation

You can install the package via composer:

Register the `PageSourceFunction` in your `sidecar.php` config file.

```php
/*
 * All of your function classes that you'd like to deploy go here.
 */
'functions' => [
    \Palpalani\PageSource\PageSourceFunction::class,
],
```
Deploy the Lambda function by running:

```
php artisan sidecar:deploy --activate
```
See the [Sidecar documentation](https://hammerstone.dev/sidecar/docs/main/functions/deploying) for details.

```bash
composer require palpalani/page-source-sidecar
```

## Usage

```php
use Palpalani\PageSource\PageSourceFunction;

echo PageSourceFunction::execute([
        'url' => 'https://targetbay.com',
        'options' => '',
    ])->body();
```

## Testing

```bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Security Vulnerabilities

Please review [our security policy](../../security/policy) on how to report security vulnerabilities.

## Credits

- [palPalani](https://github.com/palpalani)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
