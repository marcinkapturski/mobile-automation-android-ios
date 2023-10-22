Feature: Login / Sign up tests

    Background:
        * I am on the Home screen
        * I am on the Login screen

    @regression @smoke
    Scenario: User can login to the application
        When I type "email"
        And I type password "password"
        And I click Login button
        Then Success message whas shown "You are logged in!"
        And I click on OK button

    @regression @smoke
    Scenario: User can Sign up to the application
        And I click Sign up tab
        When I type "sampleEmail"
        And I type password "SamplePassword"
        And I click SIGN UP button
        Then Success message whas shown "You successfully signed up!"
        And I click on OK button

    @regression @smoke
    Scenario: Lack of value for "<field_name>" is showing validation message "<validation_message>"
        And I click Forgotten my password
        When I type login wich is "notEmail"
        Then I see "Please enter a valid username."
