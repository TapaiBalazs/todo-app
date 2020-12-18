Feature: TODO application.

Scenario: When the user opens the application for the first time, the TODO list is empty.
  Given the application is opened
  When no todo items were saved previously
  Then the "No todo items available" message is displayed

Scenario: When the user opens the application with saved todos, they are displayed
  Given saved todo items are available
  And the application is opened
  Then the "Develop todoapp" task is visible
  And the "Develop todoapp" task is completed
  And the "Write tests" task is visible
  And the "Send in the application" task is visible

Scenario: The user can delete a todo item
  Given saved todo items are available
  And the application is opened
  Then the "Develop todoapp" task is visible
  And the "Develop todoapp" task is completed
  And the "Write tests" task is visible
  And the "Send in the application" task is visible
  When the user deletes the "Develop todoapp" task
  Then the "Develop todoapp" task is no longer visible

  Scenario: The user can add a todo item using the keyboard
    Given saved todo items are available
    And the application is opened
    Then the "Develop todoapp" task is visible
    And the "Develop todoapp" task is completed
    And the "Write tests" task is visible
    And the "Send in the application" task is visible
    When the user adds the "Style checkboxes" task using the ENTER key
    Then the "Style checkboxes" task is visible

  Scenario: The user can add a todo item using the mouse
    Given saved todo items are available
    And the application is opened
    Then the "Develop todoapp" task is visible
    And the "Develop todoapp" task is completed
    And the "Write tests" task is visible
    And the "Send in the application" task is visible
    And the "Add" button should be disabled
    When the user types the "Style checkboxes" task
    And clicks on the "Add" button
    Then the "Style checkboxes" task is visible

  Scenario: The user cannot add a todo item when the add task input is dirty and empty
    Given saved todo items are available
    And the application is opened
    Then the "Develop todoapp" task is visible
    And the "Develop todoapp" task is completed
    And the "Write tests" task is visible
    And the "Send in the application" task is visible
    And the "Add" button should be disabled
    When the user types the "Style checkboxes" task
    And the user deletes the input value
    Then the "Add" button should be disabled
    And the required error message is displayed


  Scenario: The user can drag and drop todo items
    Given saved todo items are available
    And the application is opened
    Then the "Develop todoapp" task is visible
    And the "Develop todoapp" task is completed
    And the "Write tests" task is visible
    And the "Send in the application" task is visible
    And the "Write tests" task is under the "Develop todoapp" task
    When the user drags "Develop todoapp" under "Write tests"
    Then the "Develop todoapp" task is under the "Write tests" task

  Scenario: The user can move todo items down with the down arrow key
    Given saved todo items are available
    And the application is opened
    Then the "Develop todoapp" task is visible
    And the "Develop todoapp" task is completed
    And the "Write tests" task is visible
    And the "Send in the application" task is visible
    And the "Write tests" task is under the "Develop todoapp" task
    When the user presses the down arrow on "Develop todoapp" task
    Then the "Develop todoapp" task is under the "Write tests" task

  Scenario: The user can move todo items down with the down arrow key
    Given saved todo items are available
    And the application is opened
    Then the "Develop todoapp" task is visible
    And the "Develop todoapp" task is completed
    And the "Write tests" task is visible
    And the "Send in the application" task is visible
    And the "Send in the application" task is under the "Write tests" task
    When the user presses the up arrow on "Send in the application" task
    Then the "Send in the application" task is under the "Develop todoapp" task
