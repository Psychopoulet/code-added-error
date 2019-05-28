"use strict";

// deps

	// natives
	const assert = require("assert");

	// locals
	const CodeAddedError = require(require("path").join(__dirname, "..", "lib", "code-added-error.js"));

// tests

describe("toJSON", () => {

	describe("codeAndMessageOnly", () => {

		it("should test with empty constructor", () => {

			const err = new CodeAddedError();

			assert.deepStrictEqual(err.toJSON(true), {
				"code": "",
				"message": ""
			}, "It does not generate the wanted Error");

		});

		it("should test with message", () => {

			const err = new CodeAddedError("This is a test");

			assert.deepStrictEqual(err.toJSON(true), {
				"code": "",
				"message": "This is a test"
			}, "It does not generate the wanted Error");

		});

		it("should test with message & code", () => {

			const err = new CodeAddedError("This is a test", "TEST");

			assert.deepStrictEqual(err.toJSON(true), {
				"code": "TEST",
				"message": "This is a test"
			}, "It does not generate the wanted Error");

		});

		it("should test with message, code & fileName", () => {

			const err = new CodeAddedError("This is a test", "TEST", CodeAddedError.file());

			assert.deepStrictEqual(err.toJSON(true), {
				"code": "TEST",
				"message": "This is a test"
			}, "It does not generate the wanted Error");

		});

		it("should test with message, code, fileName & lineNumber", () => {

			const err = new CodeAddedError("This is a test", "TEST", CodeAddedError.file(), CodeAddedError.line());

			assert.deepStrictEqual(err.toJSON(true), {
				"code": "TEST",
				"message": "This is a test"
			}, "It does not generate the wanted Error");

		});

	});

	describe("full", () => {

		it("should test empty constructor", () => {

			const err = new CodeAddedError();

			assert.deepStrictEqual(err.toJSON(), {
				"code": "",
				"message": "",
				"fileName": "",
				"lineNumber": 0
			}, "It does not generate the wanted Error");

		});

		it("should test with message", () => {

			const err = new CodeAddedError("This is a test");

			assert.deepStrictEqual(err.toJSON(), {
				"code": "",
				"message": "This is a test",
				"fileName": "",
				"lineNumber": 0
			}, "It does not generate the wanted Error");

		});

		it("should test with message & code", () => {

			const err = new CodeAddedError("This is a test", "TEST");

			assert.deepStrictEqual(err.toJSON(), {
				"code": "TEST",
				"message": "This is a test",
				"fileName": "",
				"lineNumber": 0
			}, "It does not generate the wanted Error");

		});

		it("should test with message, code & fileName", () => {

			const file = CodeAddedError.file();
			const err = new CodeAddedError("This is a test", "TEST", file);

			assert.deepStrictEqual(err.toJSON(), {
				"code": "TEST",
				"message": "This is a test",
				"fileName": file,
				"lineNumber": 0
			}, "It does not generate the wanted Error");

		});

		it("should test with message, code, fileName & lineNumber", () => {

			const file = CodeAddedError.file();
			const line = CodeAddedError.line();

			const err = new CodeAddedError("This is a test", "TEST", file, line);

			assert.deepStrictEqual(err.toJSON(), {
				"code": "TEST",
				"message": "This is a test",
				"fileName": file,
				"lineNumber": line
			}, "It does not generate the wanted Error");

		});

	});

});
