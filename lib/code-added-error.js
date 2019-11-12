"use strict";

// module

module.exports = class CodeAddedError extends Error {

	constructor (error = "", code = "", fileName = "", lineNumber = 0) {

		super(error && error.message ? error.message : error);

		this.name = "CodeAddedError";
		this.fileName = fileName;
		this.lineNumber = lineNumber;

		if ("string" === typeof error) {
			this.message = error;
		}
		else if (error instanceof Error) {

			this.message = error.message;

			if (!code) {

				if (error instanceof ReferenceError) {
					this.code = "MISSING";
				}
				else if (error instanceof TypeError) {
					this.code = "WRONG_TYPE";
				}
				else if (error instanceof RangeError) {
					this.code = "RANGE";
				}
				else {
					this.code = "UNKNOWN";
				}

			}

			this.stack = error.stack;

			if (!fileName && error.fileName) {
				this.fileName = error.fileName;
			}

			if (!lineNumber && error.lineNumber) {
				this.lineNumber = error.lineNumber;
			}

		}
		else if (error && error.message) {

			this.message = error.message;

			if (error.code) {
				this.code = String(error.code).toUpperCase();
			}

		}
		else {
			this.message = JSON.stringify(error);
		}

		if (!this.code) {
			this.code = String(code).toUpperCase();
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

						if (3 <= stack.length) {
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
