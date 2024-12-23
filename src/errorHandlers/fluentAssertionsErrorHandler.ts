import { TestStepResult } from "@cucumber/messages";
import * as vscode from "vscode";
import { ITestRunErrorHandler, registerHandler } from "./testRunErrorHandler";
import { getDurationMilliseconds } from "../util";

export default class FluentAssertionsErrorHandler implements ITestRunErrorHandler {
    canHandleError(result: TestStepResult): boolean {
        return (result.message ?? "").startsWith("AssertionError [ERR_ASSERTION]");
    }

    public handleError(result: TestStepResult, step: vscode.TestItem, uri: string, range: vscode.Range, options: vscode.TestRun): void {
        const lines = result.message!.split("\n");
        const message = lines[0];
        const expected: string[] = [];
        const actual: string[] = [];

        if (lines[1] === "    + expected - actual") {
            for (let i = 3; i < lines.length; i++) {
                const line = lines[i].trim();
                if (line.startsWith("+")) {
                    expected.push(line.substring(1));
                } else if (line.startsWith("-")) {
                    actual.push(line.substring(1));
                }
            }

            options.failed(step, vscode.TestMessage.diff(message, expected.join("\n"), actual.join("\n")), getDurationMilliseconds(result.duration));
        } else {
            options.failed(step, new vscode.TestMessage(message), getDurationMilliseconds(result.duration));
        }
    }
}

registerHandler(new FluentAssertionsErrorHandler());
