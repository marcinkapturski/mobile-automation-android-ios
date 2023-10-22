# Native App Automation Project

folder and files structure for: appium-native-app-automation
│--- features/ ### [ Gherking Feature files with tests ]
|─-- step-definitions_android/ ### [ POM used by Feature files on Android platform ]
├─-- step-definitions_ios/ ### [ POM used by Feature files on iOS platform ]
|─-- app/ ### [ Android and iOS apps ]
│--─ helpers/ ### [ app context, user handling, etc ]
|--- logs/ ### [ here are all the log files ]
|--- .github/ ### [ GitHub workflows for running tests on CI ]

## Android setup

[ Android setup ]
[ Appium setup ]
[ Run Android Emulator ]
[ Install Appium inspector ]

## iOS setup

[ iOS setup ]

## How to run Android tests locally

```bash
# install necessary packages
yarn
```

```bash
# run Appium server
yarn appium
```

```bash
# in second terminal run Android tests
yarn android
```

## How to run iOS tests

```bash
# install necessary packages
yarn
```

```bash
# run Appium server
yarn appium
```

```bash
# in second terminal run iOS tests
yarn ios
```

## How to run Android tests on GitHub Actions

[ Repository workflow url ]
