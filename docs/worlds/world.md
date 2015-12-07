# World

The World manages everything in the simulation from the entities to the grid.

## World(map, legend)

World Constructor. Reads in the map and builds a `Grid` for it.

### Parameters

- map: the map to be read into the worlds `Grid`.
- legend: the `Legend` object to pass into the world.

## World.prototype.toString

### Returns

- A string representation of the world's `Grid`

## World.prototype.turn

Iterates through every `entity` in the `Grid` and invokes `letAct` with the `entity` as an argument.

## World.prototype.letAct(entity, vector)

Invokes `entity.act` and call the appropriate `ActionRunner` for the returned result. This can be extended to add advanced logic to the world. See `LifelikeWorld` for an example.

### Parameters

- entity: the `entity` to act upon.
- vector: the `vector` location of the `entity`.

## World.prototype.checkDestination(action, vector)

Checks to see if the target destination is valid.

### Parameters

- action: the action `object` returned by `entity.act`
- vector: the `vector` to perform the action.

### Returns

- `true` if valid, else `false`
