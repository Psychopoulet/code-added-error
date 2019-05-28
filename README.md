# code-added-error
Emulation of basic Error class, with new "code" argument and "file" & "line" static methods

[![Build status](https://api.travis-ci.org/Psychopoulet/code-added-error.svg?branch=master)](https://travis-ci.org/Psychopoulet/code-added-error)
[![Coverage status](https://coveralls.io/repos/github/Psychopoulet/code-added-error/badge.svg?branch=master)](https://coveralls.io/github/Psychopoulet/code-added-error)
[![Dependency status](https://david-dm.org/Psychopoulet/code-added-error/status.svg)](https://david-dm.org/Psychopoulet/code-added-error)
[![Dev dependency status](https://david-dm.org/Psychopoulet/code-added-error/dev-status.svg)](https://david-dm.org/Psychopoulet/code-added-error?type=dev)
[![Issues](https://img.shields.io/github/issues/Psychopoulet/code-added-error.svg)](https://github.com/Psychopoulet/code-added-error/issues)
[![Pull requests](https://img.shields.io/github/issues-pr/Psychopoulet/code-added-error.svg)](https://github.com/Psychopoulet/code-added-error/pulls)

## Installation

```bash
$ npm install code-added-error
```

## Features

[Official](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Error)

### Supported

* Error
* prototype
* fileName
* lineNumber
* message
* name
* stack
* toString

### Supported, non-official

* toJSON
* static file
* static line

### Not supported

* columnNumber
* toSource

## Doc

  -- Attributes --

  * ``` name: string ``` plugins' directory path
  * ``` message: string ``` plugins' directory path
  * ``` fileName: string ``` plugins' directory path
  * ``` lineNumber: number ``` plugins' directory path
  * ``` stack: string ``` plugins' directory path

  -- Constructor --

  * ``` constructor(message: string, code?: string, fileName?: string, lineNumber?: string) ```

  -- Methods --

  * ``` toString(codeAndMessageOnly?: boolean): string ``` return string-formated error
  * ``` toJSON(codeAndMessageOnly?: boolean): object ``` return JSON-formated error
  * ``` static file(): string ``` return current file
  * ``` static line(): number ``` return current line

## Examples

```javascript
"use strict";

const CodeAddedError = require('code-added-error');

const err = new CodeAddedError("This is a test", "TEST", CodeAddedError.file(), CodeAddedError.line());

console.log(err.name);
console.log(err.message);
console.log(err.toString());
console.log(err.toJSON());
```

### Typescript

```typescript
"use strict";

import CodeAddedError = require('code-added-error');

const manager = new CodeAddedError("This is a test", "TEST");

console.log(err.name);
console.log(err.message);
console.log(err.toString());
console.log(err.toJSON());
```

## Tests

```bash
$ npm run-script tests
```

## License

  [ISC](LICENSE)
