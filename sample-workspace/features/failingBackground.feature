Feature: Failing background steps

Background:
    Given one succeeding background step
    And another failing background step

Scenario: Background failing
When the user runs a scenario
Then the background step is indicated as failing