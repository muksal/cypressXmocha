Feature: Sign In 

Scenario: User want to login to Merchant Dashboard
    When user access merchant page
    Then input email 'email'
    Then input password 'password'
    Then click login

     