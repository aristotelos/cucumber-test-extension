# ![Logo](docs/images/logo.png) CucumberJS Test Runner

[![build](https://github.com/aristotelos/cucumber-test-extension/actions/workflows/node.js.yml/badge.svg)](https://github.com/aristotelos/cucumber-test-extension/actions/workflows/node.js.yml)

This extension integrates CucumberJS with Visual Studio Code Test Runner.

## Features

Seamlessly integrates with Visual Studio Code new Test Runner showing all files in your workspace and a detailed view of all:

- Features
- Scenarios
- Steps

![Test runner screenshot](docs/images/testrunner.png)

### Test Result in `.feature` files

You can view which steps passed or failed directly in your `.feature` files, and with the help of the official Cucumber extension you can Ctrl + click to navigate to your failing step.

![Feature file screenshot](docs/images/feature.png)

### Inline error details

After running the test you will see an inline report of the failing tests with extensive details of the error and an history of test results.

![Inline errors screenshot](docs/images/inline-errors.png)

### Debug an entire feature or a single scenario

You can even debug your tests directly from the Test Runner UI, just click the `Debug Test` action on a Feature or a Scenario!

![Debug screenshot](docs/images/debug.png)

### Search by @Tags

We support searching and filtering tests by @Tag (Thanks to psethwick)

![Tags screenshot](docs/images/tags.png)

### Override environment variables

You can specify environment variables in your `settings.json` file, so that when you run your tests those variables will be defined.

```json
{
    "cucumberTestExtension.env": {
        "MY_VARIABLE_1": "foo",
        "MY_VARIABLE_2": "bar"
    }
}
```

### Custom cucumber profile

You can select a profile to run the tests

```javascript
const common = {
    require: ["features/**/*.{js,ts}"],
    requireModule: ["ts-node/register"],
    publishQuiet: true,
};

module.exports = {
    default: {
        ...common,
        paths: ["features/**/*.feature"],
    },
    customProfile: {
        ...common,
    },
};
```

```json
{
    "cucumberTestExtension.profile": "customProfile"
}
```

### Set current working directory for runner

If you have your cucumber tests nested in your development project you may want to specify the current working directory cucumber is running in:

```tree
├── src
│   ... your source code
├── specs
│   ├── cucumber.yml
│   ├── tsconfig.json
│   ├── features
│   ├── steps
│   ├── ...
└── .gitignore
```

You can set the current working directory to cucumber and still have the test explorer for your whole application:

```json
{
    "cucumberTestExtension.cwd": "./specs"
}
```

### Error detection and reporting

The extension detects and reports errors in before and after hooks.
If possible it reports a problem directly at the line where the error occurred in the source file.

## Prerequisites

You need to have a working `cucumber-js` installation in your working folder and a proper cucumber configuration file.
Please follow the documentation on the official `cucumber-js` website on how to setup the environment.

You need to install the `@cucumber/cucumber` npm package

```bash
npm install @cucumber/cucumber
```

For typescript support you need to install `ts-node`

```bash
npm install ts-node
```

## Compatibility

The extension has been tested with `javascript` and `typescript`.

Example of a `cucumber.yml` file for a `typescript` setup:

```yaml
default:
    features: ["features/**/*.feature"]
    requireModule: ["ts-node/register"]
    require: ["features/**/*.{js,ts}"]
    publishQuiet: true
```

## Known Issues

- At the moment you cannot undefine an existing environment variable, the only thing you can do is set the variable to an empty string.
