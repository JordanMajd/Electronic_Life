# ActionRunner

`ActionRunner` is used to execute the returned action from Entity.act. If the action is successful then the method will return true, otherwise false.

Needs to be invoked by a `World` using the `call` function in order to pass in the `World`'s `this`.

```
  //Example from LifelikeWorld.prototype.toAct
  ActionRunner[action.type].call(this, entity, vector, action);
```

## ActionRunner.grow(entity)

Increases `entity.energy` by 0.5

### Parameters

- entity: the `entity` to perform the action upon.

## ActionRunner.move(entity, vector, action)

If the entity has `energy` and the `vector` is valid, moves the `entity` to the provided `vector` and reduces `entity.energy` by 1

### Parameters

- entity: the entity to move.
- vector: the destination to move the entity to.
- action: the resulted action object used to invoke this method.

## ActionRunner.eat(entity, vector, action)

If the `vector` is valid and the target entity has energy has energy then the `entity` gains the target entities energy, and the target entity is removed from the grid.

### Parameters

- entity: the entity to feed.
- vector: the destination of the target entity.
- action: the resulted action object used to invoke this method.

## ActionRunner.reproduce(entity, vector, action)

If the `vector` is valid, and the `entity` has twice the required energy to create a new version of itself then it creates a new entity at the given vector and loses the energy amount that the new entity starts with.

### Parameters

- entity: the entity performing the reproduction.
- vector: the destination to reproduce into.
- action: the resulted action object used to invoke this method.
