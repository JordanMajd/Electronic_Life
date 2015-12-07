# View

`View` is used by `entities` to search for other `entities` and see what is around them.

## View(world, vector)

View Constructor

### Parameters

- world: the `world` to view.
- vector: the vector location to look around.

## View.prototype.look(direction)

Returns the character of whatever entity is in the given direction.

### Parameters

- direction: the human readable `string` direction.

### Returns

- `entity.originChar` of the `entity` in the given `direction` otherwise returns `'#'`

## View.prototype.findAll(character)

Looks in every direction to see if the character exists and returns an array of human readable directions.

### Parameters

- character: the character to check for.

### Returns

- an `Array` filled with human readable direction `strings`.

## View.prototype.find(character)

Looks to see if the character exists in any direction around the target and if it does returns returns the direction it is in. If there are multiple instances of the character it returns the direction of a random one.

### Parameters

- character: the character to check for.

### Returns

- the human readable direction `string` of the character or `null`.
