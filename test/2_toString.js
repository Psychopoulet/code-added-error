"use strict";

// deps

	// natives
	const assert = require("assert");

	// locals
	const CodeAddedError = require(require("path").join(__dirname, "..", "lib", "code-added-error.js"));

// tests

describe("CodeAddedError / toString", () => {

	describe("codeAndMessageOnly", () => {

		it("should test empty constructor", () => {

			const err = new CodeAddedError();

			assert.strictEqual(err.toString(true), "", "It does not generate the wanted Error");

		});

		it("should test with message", () => {

			const err = new CodeAddedError("This is a test");

			assert.strictEqual(err.toString(true), "This is a test", "It does not generate the wanted Error");

		});

		it("should test with message & code", () => {

			const err = new CodeAddedError("This is a test", "TEST");

			assert.strictEqual(err.toString(true), "[TEST] - This is a test", "It does not generate the wanted Error");

		});

		it("should test with message, code & fileName", () => {

			const err = new CodeAddedError("This is a test", "TEST", CodeAddedError.file());

			assert.strictEqual(err.toString(true), "[TEST] - This is a test", "It does not generate the wanted Error");

		});

		it("should test with message, code, fileName & lineNumber", () => {

			const err = new CodeAddedError("This is a test", "TEST", CodeAddedError.file(), CodeAddedError.line());

			assert.strictEqual(err.toString(true), "[TEST] - This is a test", "It does not generate the wanted Error");

		});

	});

	describe("full", () => {

		it("should test empty constructor", () => {

			const err = new CodeAddedError();

			assert.strictEqual(err.toString(), "", "It does not generate the wanted Error");

		});

		it("should test with message", () => {

			const err = new CodeAddedError("This is a test");

			assert.strictEqual(err.toString(), "This is a test", "It does not generate the wanted Error");

		});

		it("should test with message & code", () => {

			const err = new CodeAddedError("This is a test", "TEST");

			assert.strictEqual(err.toString(), "[TEST] - This is a test", "It does not generate the wanted Error");

		});

		it("should test with message, code & fileName", () => {

			const file = CodeAddedError.file();
			const err = new CodeAddedError("This is a test", "TEST", file);

			assert.strictEqual(err.toString(), "[TEST] - This is a test (file: " + file + ")", "It does not generate the wanted Error");

		});

		it("should test with message, code, fileName & lineNumber", () => {

			const file = CodeAddedError.file();
			const line = CodeAddedError.line();

			const err = new CodeAddedError("This is a test", "TEST", file, line);

			assert.strictEqual(err.toString(),
				"[TEST] - This is a test (file: " + file + ", line: " + line + ")",
				"It does not generate the wanted Error"
			);

		});

		it("should test with message, code & lineNumber", () => {

			const line = CodeAddedError.line();
			const err = new CodeAddedError("This is a test", "TEST", "", line);

			assert.strictEqual(err.toString(), "[TEST] - This is a test (line: " + line + ")", "It does not generate the wanted Error");

		});

	});

});
