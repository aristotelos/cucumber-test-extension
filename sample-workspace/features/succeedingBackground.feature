Feature: Succeeding background steps

Background:
    Given one background step
    And another background step

Scenario: Background succeeding
When the user runs a scenario
Then the scenario and test step are indicated as succeeding