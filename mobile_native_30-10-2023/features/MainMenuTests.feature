Feature: Main menu navigation tests

    @regression @smoke
    Scenario: User sees Home screen after launching the app
        Then I launch the app
        Then I open Home sceen
        Then I open Webview screen
        Then I open Login screen
        Then I open Forms screen
        Then I open Swipe sceen
        Then I open Drag screen
        Then Close the test session
