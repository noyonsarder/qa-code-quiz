Feature: Login and Logout Feature

    Scenario Outline: Test the login form with "<test>" credentials
        Given I navigate to the test site
        When I enter "<username>" and "<password>"
        And I click "LOGIN" button
        Then the following text "<message>" should display

        Examples:
            | test    | username      | password       | message                                         |
            | Invalid | SomeName      | TopSecret1234! | If you do not have an account, contact an admin |
            | Invalid | @#            |                | If you do not have an account, contact an admin |
            | Valid   | SomeUser_name | TopSecret1234! | Hello SomeName                                  |

    Scenario: Log out of the application after logging in
        Given I navigate to the test site
        When I enter "SomeUser_name" and "TopSecret1234!"
        And I click "LOGIN" button
        Then the following text "Hello SomeName" should display
        When I click "LOGOUT" button
        Then the following text "qa.code-quiz.dev" should display

    Scenario: Verify the user information after logging in
        Given I navigate to the test site
        When I enter "SomeUser_name" and "TopSecret1234!"
        And I click "LOGIN" button
        Then the following user information should display
            | name            | SomeName   |
            | favouriteFruit  | some fruit |
            | favouriteMovie  | The Room   |
            | favouriteNumber | BN<1234>   |

    Scenario: The session expires unexpectedly when the page is reloaded after logging in
        Given I navigate to the test site
        When I enter "SomeUser_name" and "TopSecret1234!"
        And I click "LOGIN" button
        Then the following text "Hello SomeName" should display
        When I reload the page
        Then the following text "qa.code-quiz.dev" should display
