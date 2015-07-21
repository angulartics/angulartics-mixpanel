## angulartics-mixpanel

[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![Bower version][bower-image]][bower-url] [![Dependencies status][dep-status-image]][dep-status-url] [![MIT license][license-image]][license-url] [![Join the Slack chat][slack-image]][slack-url]

Mixpanel plugin for [Angulartics](http://github.com/luisfarzati/angulartics).

## Install

First make sure you've read installation and setup instructions for [Angulartics](https://github.com/luisfarzati/angulartics#install).

Then you can install this package either with `npm` or with `bower`.

### npm

```shell
npm install angulartics-mixpanel
```

Then add `angulartics.mixpanel` as a dependency for your app:

```javascript
require('angulartics')

angular.module('myApp', [
  'angulartics',
  require('angulartics-mixpanel')
]);
```

> Please note that core Angulartics doesn't export the name yet, but it will once we move it into [the new organization](http://github.com/angulartics).

### bower

```shell
bower install angulartics-mixpanel
```

Add the `<script>` to your `index.html`:

```html
<script src="/bower_components/angulartics-mixpanel/dist/angulartics-mixpanel.min.js"></script>
```

Then add `angulartics.mixpanel` as a dependency for your app:

```javascript
angular.module('myApp', [
  'angulartics',
  'angulartics.mixpanel'
]);
```

## Documentation

Documentation is available on the [Angulartics site](http://luisfarzati.github.io/angulartics).

## Development

```shell
npm run build
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/angulartics-mixpanel.svg
[npm-url]: https://npmjs.org/package/angulartics-mixpanel
[npm-downloads-image]: https://img.shields.io/npm/dm/angulartics-mixpanel.svg
[npm-downloads-url]: https://npmjs.org/package/angulartics-mixpanel
[bower-image]: https://img.shields.io/bower/v/angulartics-mixpanel.svg
[bower-url]: http://bower.io/search/?q=angulartics-mixpanel
[dep-status-image]: https://img.shields.io/david/angulartics/angulartics-mixpanel.svg
[dep-status-url]: https://david-dm.org/angulartics/angulartics-mixpanel
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
[slack-image]: https://angulartics.herokuapp.com/badge.svg
[slack-url]: https://angulartics.herokuapp.com
