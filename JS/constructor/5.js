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
  // Example 5: Defining static methods
// ===============================================================

// Classes support static members which can be accessed without an
// instance being present.
class Triple {
    // Using the 'static' keyword creates a method which is associated
    // with a class, but not with an instance of the class.
    static triple(n) {
      n = n || 1;
      return n * 3;
    }
  }
  
  // super.prop in this example is used for accessing super-properties from
  // a parent class. This works fine in static methods too:
  class BiggerTriple extends Triple {
    static triple(n) {
      return super.triple(n) * super.triple(n);
    }
  }
  
  ChromeSamples.log(Triple.triple());
  ChromeSamples.log(Triple.triple(6));
  ChromeSamples.log(BiggerTriple.triple(3));
  // var tp = new Triple();
  // ChromeSamples.log(tp.triple()); tp.triple is not a function
  