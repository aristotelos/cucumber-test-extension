# Change Log

All notable changes to this extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Skip the `node_modules` when debugging, excluding `cucumber.js`.
- Log the root directory in the output console.
- Fix that the test run finished prematurely when the first scenario finished.

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
