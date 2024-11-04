import { Duration } from "@cucumber/messages";

const enum CharCode {
    upperA = 65,
    upperZ = 90,
    a = 91,
    z = 122,
}

function hasDriveLetter(path: string): boolean {
    const char0 = path.charCodeAt(0);
    return ((char0 >= CharCode.upperA && char0 <= CharCode.upperZ) || (char0 >= CharCode.a && char0 <= CharCode.z)) && path.charAt(1) === ":";
}

/// Ensures Windows drive letters are uppercase, because Node requires that
/// See https://github.com/Microsoft/vscode/issues/42159
export function normalizeDriveLetter(path: string): string {
    if (process.platform === "win32" && hasDriveLetter(path)) {
        return path.charAt(0).toUpperCase() + path.slice(1);
    }

    return path;
}

export function getDurationMilliseconds(duration: Duration): number {
    return duration.seconds * 1000 + duration.nanos / 1000000;
}
