# Tower of Hanoi solutions

The version of the code used here are slightly different from the start code so you will see different variable names used.

There are 3 files:
- [recursive-hanoi.js](recursive-hanoi.js)
  - This is the solution based on the recursive algorithm. You can run this in repl.it or the Chrome dev tool.
- [iterative-hanoi.js](iterative-hanoi.js)
  - This is the solution based on the iterative algorithm. You can run this in repl.it or the Chrome dev tool.
- [hanoi.js](hanoi.js)
  - This is an implementation of the recursive algorithm that requires Node.js to run.
  ``` javascript
  var Hanoi = require('./hanoi');
  var game = new Hanoi();
  game.run(3);  // Using 3 discs
  ```
