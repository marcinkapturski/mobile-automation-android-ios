Feature: Main menu navigation tests

    @regression @smoke
    Scenario: User sees Home screen after launching the app
        Then I am on the Home screen


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
