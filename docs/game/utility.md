# Utility

This class is used to hold functions that are generally useful. Later on they might be refactored in separate objects.

## directions

This is an `object` that used to map a human readable direction to a `Vector`.

Example:
```
directions['n'] //gets the value: Vector(0,-1)
```

## directionNames

This is an `array` of strings for all human readable directions.

Example
```
directionNames[0] //gets the string: 'n'
```

## entityFromChar(legend, ch)

Looks up the given character in the legend and returns the `entity` with `entity.originChar` set to `ch`.

### Parameters

- legend: an `object` that maps characters to `entity` constructors.
- character: a `string` of a single character.

### Returns

- `entity` constructor or `null` if nothing is found.

## charFromEntity(entity)

Returns the `entity.orginChar`, otherwise returns ' '

### Parameters

- entity: the entity to get the `originChar` for

### Returns

- `entity.originChar` or `null` if nothing is found.

## dirPlus(dir, n)

### Parameters

- dir: human readable direction `string`, e.g. `'n'`
- n: a `number` offset to the desired direction.

### Returns

- the offset direction `string`

### Example
```
dirPlus('n', 4); //returns 's'
```
