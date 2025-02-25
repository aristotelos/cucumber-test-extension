# Change Log

All notable changes to this extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.7.6]

### Fixed

- Abort the cucumber-js process immediately when the test run is cancelled.
- Make the file-level test item runnable too.
- Fix reported duration of failed test when an assert failed.

## [0.7.5]

- Fix that all tests should not error when cucumber-js reported anything to `stderr`.
- Wait for the cucumber-js process to finish and log its exit code correcly.

## [0.7.4]

- Skip the `node_modules` when debugging, excluding `cucumber.js`.
- Log the root directory in the output console.
- Fix that the test run finished prematurely when the first scenario finished.
- Log `world.attach` messages as test output.
- Fix that the number of seconds the test step took were omitted - only the nanoseconds were counted.
- Start the test items one by one instead of all at once. Instead, queue all test items but only start the scenario and step that started.
- Fix that with `rootDirectory` and `workingDirectory`, diagnostics were not reported correctly for `Before` and `After` hooks when they failed.

## [0.7.3]

- Fix that the `rootDirectory` and `workingDirectory` did not work properly when not ending with a `/` - they did not report success on the scenario or feature and did not mark steps as done during the test run.

## [0.7.2]

- Fix error: `Cannot find module '@rauschma/stringio'`

## [0.7.1]

- Update required VS Code version to latest (1.94.0)

## [0.7.0]

- Fix setting prefix from `cucumberTestRunner` to `cucumberTestExtension`
- Rename setting `cwd` to `workingDirectory` for better understanding
- Fix that scenarios and features were not correctly marked as passed
- Add `rootDirectory` setting to be able to configure the path to the `node_modules` where Cucumber JS is installed

## [0.6.2]

- Initial release, based on <https://github.com/Balrog994/cucumber-test-runner/releases/tag/v0.5.1>
- Incorporate <https://github.com/Balrog994/cucumber-test-runner/pull/15>:
  - Added setting to set the current working directory for cucumber.js in workspace settings
  - Added output of stderr to console runner and test messages.
