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
  // Example 4: Subclassing methods of a parent class
// ===============================================================

class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = 'Rectangle';
  }
  // Here, sayName() is a subclassed method which
  // overrides their superclass method of the same name.
  sayName() {
    ChromeSamples.log('Sup! My name is ', this.name + '.');
    super.sayHistory();
  }
}

let r = new Rectangle(50, 60);
r.sayName();