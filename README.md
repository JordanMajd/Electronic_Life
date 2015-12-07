# CRUSH CODE FRIDAY \../

- Learning Objectives
  - Play around with Object Oriented Programming.
  - Create an inheritance hierarchy of entities.
  - Implement polymorphism by overriding behavior of parents.
  - Extend the functionality of parent entities by adding in new behaviors and states in the children.
  - Hide the internals of entities using encapsulation.

# Instructions

Lets program a simulated world filled with many different animals and plants. The world is visually represented by a map of ASCII characters. The every n milliseconds the world executes a turn. Every turn the animals and plants have an opportunity to take an action. This action can allow them to move around the map, eat each other, reproduce and grow.

We have been provided with a lot of boilerplate code. Be sure to read through it. As you work on the project continue to reference this code. This will help you understand how the program works and what tools you have to use.

The section titled Implement has a list of items that need to be implemented.

# Implement

### Entity

- Interface
  - energy: a number to default to 0. If you are using the LifeLikeWorld instead of World to run the map then if energy === 0 the object dies
  - direction: a string to represent direction, n ne e se s etc...
  - originChar: a character to represent the entity on the map
  - act(view): a function that takes in a View object as a paramater. returns an action object. Example
```
return {
   //type can be "reproduce", "move", "eat" or "grow"
   type: "move",
   //direction you want to take the action
   direction: this.direction
};
```

This function gets called every turn by the World object

### Animal (child of Entity)

- Overrides
  - act: override this function so it checks for empty spaces and then moves in the direction of an empty space. Examine the View object to see how you might be able to do this.
  - energy: we probably don’t want energy to be 0
  - originChar: we want a different orignChar for every instance of entity

### Plant (child of Entity)

- Overrides
  - act: override this function so it checks its energy levels, if they are high return a reproduce action, else return a grow action.
  - energy: we probably don’t want energy to be 0,
  - originChar: we want a different orignChar for every instance of entity

### Herbivore (child of Animal)

- Overrides
  - act: override this function so that if it is adjacent to a plant it eats it else if it has high energy it reproduces, otherwise have it move
  - energy: we probably don’t want energy to be 0,
  - originChar: we want a different orignChar for every instance of entity

### Carnivore (child of Animal)

- Overrides
  - act: override this function so that if it is adjacent to an Herbivore it eats it else if it has high energy it reproduces, otherwise have it move
  - energy: we probably don’t want energy to be 0,
  - originChar: we want a different orignChar for every instance of entity

# Tips

- Read through the list of everything you need to implement.
- Read through the existing code and documentation.
- Implement one thing at a time. Test often.

# Project Roadmap:

- Refactor and reduce the Action and ActionRunner objects to a single object.
- Refactor the Legend to have some of the Utility methods that operate on the Legend.
- Refactor the Utility object and extract the Direction logic to its own object.
