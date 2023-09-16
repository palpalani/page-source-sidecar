# Get source content of any given url using Laravel Sidecar

[![Latest Version on Packagist](https://img.shields.io/packagist/v/palpalani/page-source-sidecar.svg?style=flat-square)](https://packagist.org/packages/palpalani/page-source-sidecar)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/palpalani/page-source-sidecar/run-tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/palpalani/page-source-sidecar/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/actions/workflow/status/palpalani/page-source-sidecar/fix-php-code-style-issues.yml?branch=main&label=code%20style&style=flat-square)](https://github.com/palpalani/page-source-sidecar/actions?query=workflow%3A"Fix+PHP+code+style+issues"+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/palpalani/page-source-sidecar.svg?style=flat-square)](https://packagist.org/packages/palpalani/page-source-sidecar)

This is where your description should go. Limit it to a paragraph or two. Consider adding a small example.

## Installation

You can install the package via composer:

```bash
composer require palpalani/page-source-sidecar
```

You can publish the config file with:

```bash
php artisan vendor:publish --tag="page-source-sidecar-config"
```

This is the contents of the published config file:

```php
return [
];
```

## Usage

```php
$pageSource = new Palpalani\PageSource();
echo $pageSource->echoPhrase('Hello, Palpalani!');
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
