var pegA = [];
var pegB = [];
var pegC = [];
var numberOfDiscs;
var steps = 0;

// Array is used as a stack
// - Use shift() to get the smallest disc from the top
// - Use unshift() to put a disc onto a stack

// Algorithm
// Alternating between the smallest and the next-smallest disks, 
// follow the steps for the appropriate case:
//
// For an even number of disks:
//   - make the legal move between pegs A and B
//   - make the legal move between pegs A and C
//   - make the legal move between pegs B and C
//   - repeat until complete
//
// For an odd number of disks:
//   - make the legal move between pegs A and C
//   - make the legal move between pegs A and B
//   - make the legal move between pegs C and B
//   - repeat until complete
//
// In each case, a total of 2n-1 moves are made.

function moveOneDisc(peg1, peg2) {
  if (pegC.length == numberOfDiscs) {
    return;
  }
  if (peg1.length > 0 && (peg2.length === 0 || peg1[0] < peg2[0])) {
    peg2.unshift(peg1.shift());
    steps++;
    printTowers();
  } else if (peg2.length > 0 && (peg1.length === 0 || peg2[0] < peg1[0])) {
    peg1.unshift(peg2.shift());
    steps++;
    printTowers();
  }
}

function moveEven() {
  while (pegC.length != numberOfDiscs) {
    moveOneDisc(pegA, pegB);
    moveOneDisc(pegA, pegC);
    moveOneDisc(pegB, pegC);
  }
}

function moveOdd() {
  while (pegC.length != numberOfDiscs) {
    moveOneDisc(pegA, pegC);
    moveOneDisc(pegA, pegB);
    moveOneDisc(pegC, pegB);
  }
}

function towerOfHanoi(discs) {
  numberOfDiscs = discs;
  initialSetUp();
  printTowers();
  if (numberOfDiscs % 2 === 0) {
    moveEven();
  } else {
    moveOdd();
  }

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