"use strict";

// module

module.exports = class CodeAddedError extends Error {

	constructor (message = "", code = "", fileName = "", lineNumber = 0) {

		super(message);

		this.name = "CodeAddedError";
		this.code = code.toUpperCase();
		this.fileName = fileName;
		this.lineNumber = lineNumber;

		if ("string" === typeof message) {
			this.message = message;
		}
		else if (message instanceof Error) {
			this.message = message.message;
		}
		else if (message && message.message) {
			this.message = message.message;
		}
		else {
			this.message = JSON.stringify(message);
		}

	}

	toJSON (codeAndMessageOnly = false) {

		return codeAndMessageOnly ? {
			"code": this.code,
			"message": this.message
		} : {
			"code": this.code,
			"message": this.message,
			"fileName": this.fileName,
			"lineNumber": this.lineNumber
		};

	}

	toString (codeAndMessageOnly = false) {

		let fileData = "";
		fileData += this.code ? "[" + this.code + "]" : "";
		fileData += this.code && this.message ? " - " : "";
		fileData += this.message;

			if (!codeAndMessageOnly) {

				if (this.fileName || this.lineNumber) {

					fileData += " (";

						if (this.fileName) {
							fileData += "file: " + this.fileName;
						}

						if (this.lineNumber) {
							fileData += (this.fileName ? ", " : "") + "line: " + this.lineNumber;
						}

					fileData += ")";

				}

			}

		return fileData;

	}

	static file () {

		let file = "";

			let stack = new Error().stack.toString();

			if (stack) {

				stack = stack.split(/\r\n|\n/);

				if (2 < stack.length) {

					stack = stack[2].trim();

					const startAt = stack.indexOf("(");

					if (-1 < startAt) {

						stack = stack.slice(startAt + 1, stack.length - 1);

						stack = stack.split(":");

						if (3 < stack.length) {
							file = stack.slice(0, stack.length - 2).join(":");
						}

					}

				}

			}

		return file;

	}

	static line () {

		let line = 0;

			let stack = new Error().stack.toString();

			if (stack) {

				stack = stack.split(/\r\n|\n/);

				if (2 < stack.length) {

					stack = stack[2].trim().split(":");

					if (2 <= stack.length) {
						line = stack[stack.length - 2];
					}

				}

			}

		return 0 < line ? parseInt(line, 10) : 0;

	}

};