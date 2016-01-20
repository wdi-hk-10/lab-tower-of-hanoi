'use strict';

// Array is used as a stack
// - Use shift() to get the smallest disc from the top
// - Use unshift() to put a disc onto a stack
  
// Algorithm
//Move a tower of height-1 to an intermediate pole, using the final pole.
//Move the remaining disk to the final pole.
//Move the tower of height-1 from the intermediate pole to the final pole using the original pole.

var Hanoi = function() {
  this.pegA = [];
  this.pegB = [];
  this.pegC = [];

  this.numberOfDiscs = 0;
  this.steps = 0;
}

Hanoi.prototype.moveOneDisc = function(source, dest) {
  dest.unshift(source.shift());
  this.steps++;
  this.printTowers();
};
  
Hanoi.prototype.moveDiscs = function(source, immediate, dest, discsToBeMoved) {
  if (discsToBeMoved >= 1) {
    this.moveDiscs(source, dest, immediate, discsToBeMoved-1);
    this.moveOneDisc(source, dest);
    this.moveDiscs(immediate, source, dest, discsToBeMoved-1);
  }
};
  
Hanoi.prototype.run = function(numberOfDiscs) {
  this.numberOfDiscs = numberOfDiscs;
  this.initialSetUp();
  this.printTowers();
  this.moveDiscs(this.pegA, this.pegB, this.pegC, this.pegA.length);
  // Reset the game
  this.reset();
};
  
Hanoi.prototype.initialSetUp = function() {
  for (var i=1; i<=this.numberOfDiscs; i++){
    this.pegA.push(i);
  }
};

Hanoi.prototype.reset = function() {
  this.pegA = [];
  this.pegB = [];
  this.pegC = [];

  this.steps = 0;
}
  
Hanoi.prototype.printTowers = function() {
  var padding = " ".repeat(3);
  var bufA = Array(this.numberOfDiscs - this.pegA.length).fill("|").concat(this.pegA);
  var bufB = Array(this.numberOfDiscs - this.pegB.length).fill("|").concat(this.pegB);
  var bufC = Array(this.numberOfDiscs - this.pegC.length).fill("|").concat(this.pegC);
  console.log("Step " + this.steps);
  for (var i=0; i<this.numberOfDiscs; i++) {
    console.log("[" + padding + bufA[i] + padding + bufB[i] + padding + bufC[i] + padding + "]");
  }
  console.log("-".repeat(17) + "\n");
}

module.exports = Hanoi;
  