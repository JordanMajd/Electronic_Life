# WorldAnimator

This object is used to run the `World`. It calls `World.prototype.turn` in set intervals then outputs the result of `World.prototype.toString` to the console.

## WorldAnimator(world)

World Animator Constructor

### Parameters

- world: sets the `this.world` to `world`

## WorldAnimator.prototype.run

sets up an interval to run `AnimateWorld.prototype.tick` every `333ms`

## AnimateWorld.prototype.tick

Runs `world.turn` then clears the console and prints `world.toString` to the console.

## AnimateWorld.prototype.stop

Disables the interval to stop running `AnimateWorld.prototype.tick`.
