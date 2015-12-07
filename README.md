# Electronic Life

The goal of Electronic Life is to create a very simplified simulation of the world using Object Oriented Programming.

The `World` is represented by a `Grid` of characters, every character in the `Grid` represents an `Entity` in that world. An `Entity` can be anything from a wall to a plant to an animal.

Example:
```
############################
#####        O        ######
##                     ***##
#    ##*                 *##
#     **          ##       #
#        O        ##   **  #
#                 ##    *  #
#           #  **       *  #
#    *      # **           #
#  **       ##      O      #
##  *      ###           ###
############################
Key:
# represent Walls
O represent Animals
* represent Plants
```

Every 1/3 of a second the `World` takes a `turn`. For each turn, every `Entity` in the `World` can take an `Action`. These actions can be `move`, `eat`, `grow` and reproduce.

## Instructions

Keep these questions in mind before you start working on the project, after you have completed the exercise circle back and answer them.

1. Name an instance that you encountered polymorphism in this project.
1. Does this project demonstrate encapsulation? If yes, how so?
1. Do you think you have a better understanding of inheritance?
1. Where did you run into abstraction during this project?

You have been provided with:

1. A list of `entities` that need implemented.
1. All the code to run the program.
1. **Documentation** for all the code.

You should be able to use all of this provided information to implement everything in the list.

Workflow:

1. Implement an `entity` (Entity, Animal, Plant etc...)
1. Add the `entity` to the `Legend` in `app.js`.
1. Replace a character in the map `maps/defaultmap.js` with the character you assigned the `entity` in the legend.
1. Run the program to ensure everything worked.
1. Repeat.

## Running

1. cd into `src`
1. run `node app.js`

## Implement

Implement the following objects. They already have files created for them in the `scr/entities` directory.

You may use either design pattern:

- `prototypical inheritance` with `Object Prototypes`
- `loose inheritance` with `Closure Constructors`

Example of `prototypical inheritance` with `object prototypes`.
```
//Constructor
function ParentProtoObj(param1, param2){
  this.p1 = param1;
  this.p2 = param2;
}
//Method
ParentProtoObj.prototype.swap = function(){
  var temp = this.p1;
  this.p1 = this.p2;
  this.p2 = temp;
}

//Constructor
function ChildProtoObj(param1, param2){
  //Inherit from ParentProtoObj
  ParentProtoObj.call(this, param1, param2);
}
//Override ParentProtoObj method
ChildProtoObj.prototype.swap = function(){
  this.p1 = 'nope';
  this.p2 = 'nope';
}

//instantiate objects note: needs new keyword
var myParentProto = new ParentProtoObj('one', 'two');
var myChildProto = new ChildProtoObj('two','three');
```

Example of `loose inheritance` with `closure constructors`.
```
//constructor
function ParentClosureObj(param1, param2){
  //private logic can go here

  //return an interface to expose what you want to be public
  return {
    p1:param1,
    p2:param2,
    swap:function(){
      var temp = this.p1;
      this.p1 = this.p2;
      this.p2 = temp;
    }
  };
}
//constructor
function ChildClosureObj(param1, param2){

  //inherit from ParentClosureObj
  var self = ParentClosureObj(param1, param2);

  //override swap method
  self.swap = function(){
    this.p1 = 'nope';
    this.p2 = 'nope';
  };

  //return interface to expose what you want to be public
  return self;
}

//note: no need for new keyword
var myParentClos = ParentClosureObj('one', 'two');
var myChildClos = ChildClosureObj('two','three');
```

### Entity

- Entity.energy: a `number`. `LifelikeWorld` and `ActionRunner` both provide examples of its usage.
- Entity.direction: a `string` to represent human readable direction. Possible values are `n``ne``e``se``s``sw``nw`.
- Entity.prototype.act(view): a `function` that takes in a `View` object as a parameter and returns an `Action` object. This function gets called by the `World` object every single turn and uses the returned `Action` to make changes to the `World`.

### Animal (child of Entity)

- Animal.prototype.act(view): override parent `function`.
 1. Check for empty spaces using the `view` object.
 1. If there is an empty space return a new `Action` with type `move` and direction set to that of empty space.

### Plant (child of Entity)

- Plant.prototype.act(view): override parent `function`.
  1. Check for an empty space using the `view` object.
  1. If empty space exists and `this.energy` >= twice the objects initial energy, then return a new `Action` with type `reproduce` and a direction set to that of the empty space.
  1. Else return a new `Action` with type `grow`.

### Herbivore (child of Animal)

- Herbivore.prototype.act(view): override parent `function`.
  1. Check for adjacent `Plant` using `view` object.
  1. Check for adjacent `Herbivore` using the `view` object.
  1. Check for adjacent empty space using the `view` object.
  1. If a plant exists, return a new `Action` with type `eat` and direction set to that of adjacent plant.
  1. Else if adjacent animal exists and an adjacent empty space exists, return a new `Action` with type `reproduce` and a direction set to that of the empty space.
  1. Else return a new `Action` with type `move` and set direction to that of the empty space.

### Carnivore (child of Animal)

- Carnivore.prototype.act(view): override parent `function`.
  1. Check for adjacent `Herbivore` using `view` object.
  1. Check for adjacent `Carnivore` using the `view` object.
  1. Check for adjacent empty space using the `view` object.
  1. If a `Herbivore` exists, return a new `Action` with type `eat` and direction set to that of adjacent `Herbivore`.
  1. Else if adjacent `Carnivore` exists and an adjacent empty space exists, return a new `Action` with type `reproduce` and a direction set to that of the empty space.
  1. Else return a new `Action` with type `move` and set direction to that of the empty space.

## Stretch Goals:

Now that you have a basic idea of how to add `Entities` to the world the options are endless. You can inherit from any of the objects in this project. You could add in your own `Actions`, `Worlds` or `Views` to make the world any way you would like.

Ideas:

- Balance the ecosystem by making the animals movement, hunting, foraging and eating patterns smarter.
- Create a type of `Plant` that eats animals.
- Add in an `Entity.prototype.age` so that objects only can live so many turns.
- Add in an `Entity.prototype.rest` so entities need to rest every so many turns to regain rest.
- Create a `Human` that can create `Sheltars` that if they are next to them they regain rest faster.
- Create a `Raptor` object that is a child of `Carnivore` that  travels in packs.
- Add in rivers and lakes that have their own ecosystems.

## Project Roadmap:

- Build a map generator.
- Refactor and reduce the Action and ActionRunner objects to a single object.
- Refactor the Legend to have some of the Utility methods that operate on the Legend.
- Refactor the Utility object and extract the Direction logic to its own object.

## About

I started this project as a way to teach students Object Oriented Programming in Javascript. This project is an adaptation of [Eloquent Javascript](http://eloquentjavascript.net/)'s project from [Chapter 7](http://eloquentjavascript.net/07_elife.html). Initially, it was started to just expose the internals of the program so that they could be modified, extended and inherited. Later, it was modified to run in `node` instead of a web browser so that students could save their work and use a more familiar programming environment. Since then I've taken the liberty of making several other architectural changes and as the project evolves I imagine it will diverge further and further from Eloquent Javascript.
