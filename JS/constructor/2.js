// A base class is defined using the new reserved 'class' keyword
class Polygon {
    // ..and an (optional) custom class constructor. If one is
    // not supplied, a default constructor is used instead:
    // constructor() { }
    constructor(height, width) {
      this.name = "Polygon";
      this.height = height;
      this.width = width;
    }
  
    // Simple class instance methods using short-hand method
    // declaration
    sayName() {
      console.log("Hi, I am a ", this.name + ".");
    }
  
    sayHistory() {
      console.log(
        '"Polygon" is derived from the Greek polus (many) ' + "and gonia (angle)."
      );
    }
  
    // We will look at static and subclassed methods shortly
  }
  // Example 2: Creating a new class (expression-form)
// ===============================================================

// Our Polygon class above is an example of a Class declaration.
// ES6 classes also support Class expressions - just another way
// of defining a new class. For example:
const MyPoly = class Poly {
    getPolyName() {
      ChromeSamples.log('Hi. I was created with a Class expression. My name is ' +
        Poly.name);
    }
  };
  
  let inst = new MyPoly();
  inst.getPolyName();