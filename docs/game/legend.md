# Legend

Legend is used to map entities to a character so they can be used in the game.

Example:
```
myLegend.set('A', Animal);
```
Allows us to place `A` on the map and the simulation will understand that it is an `Animal`.

# Legend(legendMap)

Legend constructor

## Legend.prototype.set(character, entityConstructor)

Sets property `character` to value `entityConstructor`

### Parameters

- character: the property name to set the value for.
- entityConstructor: the value for the property name.



## Legend.prototype.get(character)

Returns the value for the property named `character`.

### Parameters

- character: the property name to get the value for.

### Returns

- the value of the property.
