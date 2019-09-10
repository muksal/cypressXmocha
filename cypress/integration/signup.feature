Feature: Sign Up

Background:: Opening Login Page
    Given user create account account

Scenario: User fill the form signup
    When user input email 'email'
    Then userinput password 'password'
        And user inpur firstname 'fname'
        And user input lastname 'lname'
        And user input phone number 'pnumber'
        And user input residence city 'rcity'
    Then user click sign up button
    
