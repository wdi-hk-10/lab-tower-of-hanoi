/**
 * WDI Lab: Tower of Hanoi
 */

/**
 * rodA          - the rod on the left. This is the starting rod.
 * rodB          - the rod in the middle.
 * rodC          - the rod on the right. This is the target rod.
 * numberOfDiscs - the number of discs used in a game. Initialised in towerOfHanoi().
 * steps         - Keep track of the number of steps used to solve the puzzle.
 */
var rodA = [];
var rodB = [];
var rodC = [];
var numberOfDiscs = 0;
var steps = 0;
// DO NOT modify the above variable declarations

// YOUR CODE HERE

function towerOfHanoi(discs) {
  numberOfDiscs = discs;
  initialSetUp();
  printTowers();
  // DO NOT modify the 3 lines above

  // YOUR CODE HERE
  function hanoiCode(numberOfDiscs, start, end, intm) {
    if (numberOfDiscs==0) {
      end.unshift(start.shift());
    } else {
      hanoiCode(numberOfDiscs-1, start, intm, end);
      end.unshift(start.shift());
      hanoiCode(numberOfDiscs-1, intm, end, start);
    }
  }

  // DO NOT remove the line below
  reset();
}

/**
 * DO NOT modify the code below
 */

 /**
  * Create the discs on rodA.
  */
function initialSetUp() {
  for (var i=1; i<=numberOfDiscs; i++){
    rodA.push(i);
  }
}

/**
 * Reset the status of the game so that you can test the function towerOfHanoi multiple times/
 */
function reset() {
  rodA = [];
  rodB = [];
  rodC = [];

  numberOfDiscs = 0;
  steps = 0;
}

/**
 * Print the status of all rods during the game
 */
function printTowers() {
  var padding = " ".repeat(3);
  var bufA = Array(numberOfDiscs - rodA.length).fill("|").concat(rodA);
  var bufB = Array(numberOfDiscs - rodB.length).fill("|").concat(rodB);
  var bufC = Array(numberOfDiscs - rodC.length).fill("|").concat(rodC);
  console.log("Step " + steps);
  for (var i=0; i<numberOfDiscs; i++) {
    console.log("[" + padding + bufA[i] + padding + bufB[i] + padding + bufC[i] + padding + "]");
  }
  console.log("-".repeat(17));
  console.log();
}
