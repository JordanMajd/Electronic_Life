# Entity

Every item in the grid is a child of`Entity`

## Entity()

Constructor

## entity.energy

- This is a `number` that represents how much energy an `Entity` has. It can be used to add a cost or reward to performing actions. In `LifelikeWorld` if `entity.energy` is below 0 the `entity` is destroyed. In `ActionRunner` each action costs `energy` or provides `energy`.

## entity.direction

- This is the human readable direction the `entity` is facing.

## Grid.prototype.act(view)

This method gets called by `World` every single turn on every single entity. It returns an `Action` which the world then attempts to perform.

### Parameters

- view: this is a `View` object that represents the `entities` view of the world. It can be used to look around the world and help your entity make decisions based on the surroundings.

### Returns

- returns a new `Action`
