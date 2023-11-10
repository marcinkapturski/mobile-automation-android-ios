# Mobile Automation for native apps (Android/iOS)

## File structure

```bash
├──── .github/ ### [ GitHub workflows for running tests on CI ]
├──── configs/ ### [ Configuration files for local run and LambdaTests ]
├──── features/ ### [ Gherking (Cucumber) Feature files with bussiness test scenarios ]
├──── step-definitions_android/ ### [ Test methods with POM for Android platform ]
├──── step-definitions_ios/ ### [ Test methods with POM for iOS platform ]
├──── apps/ ### [ Android and iOS apps ]
├──── helpers/ ### [ app context, user handling ]
├──── logs/ ### [ all logs created during test run ]
```

## Test structure

All tests will be described in business language according to app screens
Gherkin is a plain-text language structured enough to allow concise description of test scenarios and examples to illustrate business rules for the applications being tested.

Example:

```gherkin
    @regression @smoke
    Scenario Outline: User can navigate throw "<tabs>" on the main menu
        Given I am on the Home screen
        When I click on "tab_name" on the main menu
        Then the "<tab_name>" contains corresponding "<tab_content>"

        Examples:
            | tab_name | tab_content                         |
            | Home     | Demo app for the appium-boilerplate |
            | Webview  | Sauce Labs                          |
            | Login    | Login / Sign up Form                |
            | Forms    | Form components                     |
            | Swipe    | Swipe horizontal                    |
            | Drag     | Drag and Drop                       |
```

## Android setup

- [ to be added: Android setup ]
- [ to be added: Appium setup ]
- [ to be added: Run Android Emulator ]
- [ to be added: Install Appium inspector ]

## iOS setup

- [ to be added: iOS setup ]

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

## How to run iOS tests locally

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

## How to run tests on GitHub Actions with LambdaTests

- [ to be added: Repository workflow url ]
