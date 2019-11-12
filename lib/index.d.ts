/// <reference types="node" />

declare module "code-added-error" {

	interface iJSONExport {
		code: string;
		message: string;
		fileName?: string;
		lineNumber?: number;
	}

	class CodeAddedError extends Error {

		public message: string;
		public fileName: string;
		public lineNumber: number;

		constructor (message: string|Error, code?: string, fileName?: string, lineNumber?: number);

		public toJSON(codeAndMessageOnly?: boolean): iJSONExport;
		public toString(codeAndMessageOnly?: boolean): string;

		public static file(): string;
		public static line(): number;

	}

	// exports

	export { iJSONExport, CodeAddedError };
	export default CodeAddedError;

}
