# Grid

The `Grid` is used to manage the `vector` locations all of the `entities` in the `world`.

## Grid(width, height)

Takes in a `world` and sets up an interval to run `AnimateWorld.prototype.tick` on that `world`.

### Parameters

- width: the width of the world.
- height: the height of the world.

## Grid.prototype.get(vector)

### Parameters

- vector: the vector to get an object from

### Returns

- the entity at the given vector.

## Grid.prototype.set(vector, entity)

### Parameters

- vector: the vector to place the entity.
- entity: the entity to place at the vector.

## Grid.prototype.forEach(callbackFunc, context)

### Parameters

- callbackFunc: the function to execute for every entity in the grid.
- context: the context to call the `callbackFunc`.
