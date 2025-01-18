Feature: Login Feature

    Scenario Outline: Login form test with "<test>" scenario
        Given I navigate to the test site
        When I enter "<username>" and "<password>"
        And I click "LOGIN" button
        Then the text "If you do not have an account, contact an admin" should display

        Examples:
            | test        | username | password       |
            | Positive    | SomeName | TopSecret1234! |
            | emptySubmit |          |                |
            | Negative    | @#       | $%             |
