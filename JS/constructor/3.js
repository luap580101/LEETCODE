class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }

  sayName() {
    console.log("Hi, I am a ", this.name + ".");
  }

  sayHistory() {
    console.log(
      '"Polygon" is derived from the Greek polus (many) ' + "and gonia (angle)."
    );
  }
}
// Example 3: Extending an existing class
// ===============================================================

// Classes support extending other classes, but can also extend
// other objects. Whatever you extend must be a constructor.
//
// Let's extend the Polygon class to create a new derived class
// called Square.
class Square extends Polygon {
  constructor(length) {
    // The reserved 'super' keyword is for making super-constructor
    // calls and allows access to parent methods.
    //
    // Here, it will call the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = "Square";
  }

  // Getter/setter methods are supported in classes,
  // similar to their ES5 equivalents
  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}

let s = new Square(5);

s.sayName();
console.log("The area of this square is " + s.area);
