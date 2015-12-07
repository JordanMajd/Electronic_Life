# Action

Every turn the `World` goes through every single `Entity` in the `Grid` and invokes the entities' `act` function which returns an `Action`. The world then uses this `ActionRunner` to attempt to perform this `Action`

## Action(type, direction)

Action Constructor

### Parameters

- type: this is the type of action to be performed.
- direction: the direction to attempt to perform the action in.

## Action.types

This is a map of acceptable types

1. Action.types.grow
1. Action.types.eat
1. Action.types.move
1. Action.types.reproduce
