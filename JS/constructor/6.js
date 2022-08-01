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
  // Example 6: Subclassing built-in classes and DOM
// ===============================================================

// Extend Date built-in
class MyDate extends Date {
    constructor() {
      super();
    }
  
    getFormattedDate() {
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'];
      return this.getDate() + '-' + months[this.getMonth()] + '-' +
        this.getFullYear();
    }
  }
  
  var aDate = new MyDate();
  ChromeSamples.log(aDate.getTime());
  ChromeSamples.log(aDate.getFormattedDate());
  
  // Extend Uint8Array
  class ExtendedUint8Array extends Uint8Array {
    constructor() {
      super(10);
      this[0] = 255;
      this[1] = 0xFFA;
    }
  }
  
  var eua = new ExtendedUint8Array();
  ChromeSamples.log(eua.byteLength);
  
  // Extend DOM Audio element
  class MyAudio extends Audio {
    constructor() {
      super();
      this._lyrics = '';
    }
  
    get lyrics() {
      return this._lyrics;
    }
  
    set lyrics(str) {
      this._lyrics = str;
    }
  }
  
  var player = new MyAudio();
  player.controls = true;
  player.lyrics = 'Never gonna give you up';
  document.querySelector('body').appendChild(player);
  ChromeSamples.log(player.lyrics);
  
  // Note: The V8 in Chrome 42 supports subclassing built-ins but Arrays.
  // Subclassing arrays supported in Chrome 43.
  
  class Stack extends Array {
    constructor() {
      super();
    }
  
    top() {
      return this[this.length - 1];
    }
  }
  
  var stack = new Stack();
  stack.push('world');
  stack.push('hello');
  ChromeSamples.log(stack.top());
  ChromeSamples.log(stack.length);