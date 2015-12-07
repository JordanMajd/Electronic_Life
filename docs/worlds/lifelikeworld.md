# LifelikeWorld

`LifelikeWorld` inherits from `World` and overrides `World.prototype.letAct` to add  in some extra logic.

## LifelikeWorld.prototype.letAct(entity, vector)

Invokes `entity.act` and then uses the result to invoke the appropriate `ActionRunner`. If the action fails it decrements `entity.energy` by 0.2. If `entity.energy` <= 0 it removes the `entity` from the world.

### Parameters

- entity: the entity to act upon.
- vector: the vector of the entity.
