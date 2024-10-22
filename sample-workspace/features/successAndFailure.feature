Feature: Success and failure

Scenario: Succeeding scenario
When the user runs a succeeding scenario
Then the scenario and test step are indicated as succeeding

Scenario: Failing scenario
When the user runs a failing scenario
Then the scenario and failing test step are indicated as failing