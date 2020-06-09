# nodecg-env

> Yet another TypeScript wrapper for NodeCG

Bundle creation with TypeScript should be possible without depending to NodeCG during the development phase.
As such, this package contains the NodeCG types in order to not download the whole project just to use TypeScript declaration files.

## Install

```
$ npm install nodecg-env
```

## Usage

### With JavaScript

You can use the module with plain JavaScript.

```js
const nodecgEnv = require('nodecg-env');

module.exports = nodecgEnv((nodecg) => {
  // ...
});
```

### With TypeScript

The main benefit of this wrapper is to expose `nodecg` with the correct type.
No need to include the whole main project for using with TypeScript.

```ts
import nodecgEnv from 'nodecg-env';

export = nodecgEnv((nodecg) => {
  // The `nodecg` parameter has the `NodeCG` type.
});
```

You can also access the whole NodeCG types, just like that.

```ts
// Server-side types
import {NodeCG, Replicant} from 'nodecg-env';

// Browser-side types
import {NodeCG, Replicant} from 'nodecg-env/browser';
```

## Author

Alexandre Breteau - [@0xSeldszar](https://twitter.com/0xSeldszar)

## License

MIT © [Alexandre Breteau](https://seldszar.fr)
