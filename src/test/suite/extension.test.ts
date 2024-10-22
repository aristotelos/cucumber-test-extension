import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as extension from "../../extension";

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test("Extension can be found by full ID and has expected properties", () => {
        const extension = vscode.extensions.getExtension("aristotelos.cucumber-test-extension");

        assert.ok(extension);
        assert.equal(extension.extensionKind, vscode.ExtensionKind.UI);
    });

    test("Extension can be activated", async () => {
        const extension = vscode.extensions.getExtension("aristotelos.cucumber-test-extension");

        await extension?.activate();

        assert.ok(extension?.isActive);
    });
});
