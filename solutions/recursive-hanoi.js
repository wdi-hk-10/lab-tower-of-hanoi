var pegA = [];
var pegB = [];
var pegC = [];
var steps = 0;
var numberOfDiscs;

// Array is used as a stack
// - Use shift() to get the smallest disc from the top
// - Use unshift() to put a disc onto a stack

// Algorithm
//Move a tower of height-1 to an intermediate pole, using the final pole.
//Move the remaining disk to the final pole.
//Move the tower of height-1 from the intermediate pole to the final pole using the original pole.

function moveOneDisc(source, dest) {
  dest.unshift(source.shift());
  steps++;
  printTowers();
}

function moveDiscs(source, intermediate, dest, discsToBeMoved) {
  if (discsToBeMoved >= 1) {
    moveDiscs(source, dest, intermediate, discsToBeMoved-1);
    moveOneDisc(source, dest);
    moveDiscs(intermediate, source, dest, discsToBeMoved-1);
  }
}

function towerOfHanoi(discs) {
  numberOfDiscs = discs;
  initialSetUp();
  printTowers();
  moveDiscs(pegA, pegB, pegC, pegA.length);

  reset();
}

function initialSetUp() {
  for (var i=1; i<=numberOfDiscs; i++){
    pegA.push(i);
  }
}

function reset() {
  pegA = [];
  pegB = [];
  pegC = [];
  
  numberOfDiscs = 0;
  steps = 0;
}

function printTowers() {
  var padding = " ".repeat(3);
  var bufA = Array(numberOfDiscs - pegA.length).fill("|").concat(pegA);
  var bufB = Array(numberOfDiscs - pegB.length).fill("|").concat(pegB);
  var bufC = Array(numberOfDiscs - pegC.length).fill("|").concat(pegC);
  console.log("Step " + steps);
  for (var i=0; i<numberOfDiscs; i++) {
    console.log("[" + padding + bufA[i] + padding + bufB[i] + padding + bufC[i] + padding + "]");
  }
  console.log("-".repeat(17) + "\n");
}
