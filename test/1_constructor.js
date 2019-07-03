"use strict";

// deps

	// natives
	const assert = require("assert");

	// locals
	const CodeAddedError = require(require("path").join(__dirname, "..", "lib", "code-added-error.js"));

// tests

describe("constructor", () => {

	it("should test empty constructor", () => {

		const err = new CodeAddedError();

		assert.strictEqual(typeof err.name, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.name, "CodeAddedError", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.message, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.message, "", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.code, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.code, "", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.fileName, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.fileName, "", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.lineNumber, "number", "It does not generate the wanted Error");
		assert.strictEqual(err.lineNumber, 0, "It does not generate the wanted Error");

	});

	it("should test constructor with message", () => {

		const err = new CodeAddedError("This is a test");

		assert.strictEqual(typeof err.message, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.message, "This is a test", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.code, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.code, "", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.fileName, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.fileName, "", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.lineNumber, "number", "It does not generate the wanted Error");
		assert.strictEqual(err.lineNumber, 0, "It does not generate the wanted Error");

	});

	it("should test constructor with message & code", () => {

		const err = new CodeAddedError("This is a test", "TEST");

		assert.strictEqual(typeof err.message, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.message, "This is a test", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.code, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.code, "TEST", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.fileName, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.fileName, "", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.lineNumber, "number", "It does not generate the wanted Error");
		assert.strictEqual(err.lineNumber, 0, "It does not generate the wanted Error");

	});

	it("should test constructor with object message", () => {

		const err = new CodeAddedError({
			"message": "This is a test",
			"code": "TEST"
		});

		assert.strictEqual(typeof err.message, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.message, "This is a test", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.code, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.code, "TEST", "It does not generate the wanted Error");

	});

	it("should test constructor with Error message", () => {

		const err = new CodeAddedError(new Error("This is a test"));

		assert.strictEqual(typeof err.message, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.message, "This is a test", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.code, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.code, "UNKNOWN", "It does not generate the wanted Error");

	});

	it("should test constructor with ReferenceError message", () => {

		const err = new CodeAddedError(new ReferenceError("This is a test"));

		assert.strictEqual(typeof err.message, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.message, "This is a test", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.code, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.code, "MISSING", "It does not generate the wanted Error");

	});

	it("should test constructor with TypeError message", () => {

		const err = new CodeAddedError(new TypeError("This is a test"));

		assert.strictEqual(typeof err.message, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.message, "This is a test", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.code, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.code, "WRONG_TYPE", "It does not generate the wanted Error");

	});

	it("should test constructor with RangeError message", () => {

		const err = new CodeAddedError(new RangeError("This is a test"));

		assert.strictEqual(typeof err.message, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.message, "This is a test", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.code, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.code, "RANGE", "It does not generate the wanted Error");

	});

	it("should test constructor with Error message & code", () => {

		const err = new CodeAddedError(new Error("This is a test"), "TEST");

		assert.strictEqual(typeof err.message, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.message, "This is a test", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.code, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.code, "TEST", "It does not generate the wanted Error");

	});

	it("should test constructor with object message & code", () => {

		const err = new CodeAddedError({
			"message": "This is a test"
		}, "TEST");

		assert.strictEqual(typeof err.message, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.message, "This is a test", "It does not generate the wanted Error");

	});

	it("should test constructor with boolean message & code", () => {

		const err = new CodeAddedError(false, "TEST");

		assert.strictEqual(typeof err.message, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.message, "false", "It does not generate the wanted Error");

	});

	it("should test constructor with message, code & file", () => {

		const err = new CodeAddedError("This is a test", "TEST", CodeAddedError.file());

		assert.strictEqual(typeof err.code, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.code, "TEST", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.message, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.message, "This is a test", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.fileName, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.fileName, __filename, "It does not generate the wanted Error");

		assert.strictEqual(typeof err.lineNumber, "number", "It does not generate the wanted Error");
		assert.strictEqual(err.lineNumber, 0, "It does not generate the wanted Error");

	});

	it("should test constructor with message, code, file & line", () => {

		const file = CodeAddedError.file();
		const line = CodeAddedError.line();

		const err = new CodeAddedError("This is a test", "TEST", file, line);

		assert.strictEqual(typeof err.code, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.code, "TEST", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.message, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.message, "This is a test", "It does not generate the wanted Error");

		assert.strictEqual(typeof err.fileName, "string", "It does not generate the wanted Error");
		assert.strictEqual(err.fileName, file, "It does not generate the wanted Error");

		assert.strictEqual(typeof err.lineNumber, "number", "It does not generate the wanted Error");
		assert.strictEqual(err.lineNumber, line, "It does not generate the wanted Error");

	});

});
