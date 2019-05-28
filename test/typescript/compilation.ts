/// <reference path="../../lib/index.d.ts" />

import CodeAddedError = require('../../lib/code-added-error.js');

console.log(CodeAddedError);

const err = new CodeAddedError("TEST", "This is a test", CodeAddedError.file(), CodeAddedError.line());

console.log(err);

console.log(err.name);
console.log(err.code);
console.log(err.message);
console.log(err.fileName);
console.log(err.lineNumber);
console.log(err.toString());
console.log(err.toJSON());
