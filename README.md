# event-aggregate
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

An aggregator for your events. Funnels events through a single point, so not all
of your code needs to attach listeners to every object. This approach is
particularly good for handling `error` events by UI components.

## Installation
```bash
$ npm i --save event-aggregate
```
## Overview
```js
var aggregate = require('event-aggregate');

module.exports = aggregate({
  error: [locationsStore, pathStore],
  change: [pathStore]
});
```

## API
#### aggregate()
Initialize the event aggregator. Takes an `{Object} config` as an argument,
which defines the event names as keys, and an array of emitters as the value.

When an event is received from an emitter, `event-aggregate` will emit the same
event.
```js
module.exports = aggregate({
  error: [myAsyncThing, myOtherAsyncThing],
  success: [myOtherAsyncThing],
  warning: [myAsyncthing]
});

// When 'myAsyncThing' emits an error, we will catch it,
// and emit the same error ourselves.
```

## License
[MIT](https://tldrlegal.com/license/mit-license) ©
[Yoshua Wuyts](yoshuawuyts.com)

[npm-image]: https://img.shields.io/npm/v/event-aggregate.svg?style=flat-square
[npm-url]: https://npmjs.org/package/event-aggregate
[travis-image]: https://img.shields.io/travis/yoshuawuyts/event-aggregate.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/event-aggregate
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/event-aggregate.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/event-aggregate?branch=master
