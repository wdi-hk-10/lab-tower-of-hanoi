# Tower of Hanoi

## Introduction

The Tower of Hanoi is a mathamatical game/puzzle. It consists of three rods and a number of discs of different sizes which can be slide on to any rod. You can find some pretty nice illustrations at [Wikipedia](https://en.wikipedia.org/wiki/Tower_of_Hanoi).

The game starts with all discs stacking in asecnding order on the left rod. The objective of the game is to move all discs from the left rod to the right rod by obeying these rules:
1. You can only move one disc at a time.
1. You can only move the uppermost disc from a stack and place it on the top of another stack.
1. You cannot place a disc on top of a smaller disc.

## The Code
Please fork this repo and clone it to your local. You can find `hanoi.js` in the `start-code` folder. You can copy and paste the start code to [repl.it](http://repl.it), [jsbin](https://jsbin.com/?js,console) or the Chrome JS console, then run `towerOfHanoi(4)`. Then you should see something like below:

```javascript
  "Step 0"
  "[   1   |   |   ]"
  "[   2   |   |   ]"
  "[   3   |   |   ]"
  "[   4   |   |   ]"
  "-----------------"
```
This is the initial condition when the game begins with 4 discs stacking on the left most rod. The function `towerOfHanoi` can take an integer which represents the number of discs.

### The Rods
There are 3 rods in the game and they are represented by 3 arrays `rodA` (leftmost), `rodB` (middle) and `rodC` (rightmost) respectively. 

### The Discs
The discs are represented as integers stored in the Rod arrays. For example, if rodA is [1,2,3,4] then it means there are 4 discs stacking on it where 1 is the smallest disc and 4 is the largest disc. 

Here is another example showing how the Rod arrays can represent the disc formation.
```javascript
   rodA = [1,2];
   rodB = [];
   rodC = [3,4];
```
```javascript
  "[   |   |   |   ]"
  "[   |   |   |   ]"
  "[   1   |   3   ]"
  "[   2   |   4   ]"
  "-----------------"
```

## The Algorithm
There are many ways to implement the algorithm. Here are two for you to choose:

### Recursive
Believe it or not this is very easy to implement. Use a recursive function to move the discs. Let `n` be the total numbe of discs and `A, B & C` represent the rod:
  1. Move n−1 discs from A to B. This leaves disc n alone on A.
  1. Move disc n from A to C.
  1. Move n−1 discs from B to C so they sit on disc n.

### Iterative
You can use typical loop to implement the game as well but, be warned, this is more difficult to write. Here is how to do it:
- For an even number of discs:
  1. Make the legal move between A and B
  1. Make the legal move between A and C
  1. Make the legal move between B and C
  1. Repeat until complete
- For an odd number of discs:
  1. Make the legal move between A and C
  1. Make the legal move between A and B
  1. Make the legal move between C and B
  1. Repeat until complete

`legal move between A and B` means:
  - if there is a legal move from A TO B
    - Do legal move from A TO B 
  - else if there is a legal move from B to A
    - Do legal move from B to A
  - else do not do anything

### Others
The [Wikipedia](https://en.wikipedia.org/wiki/Tower_of_Hanoi) page has listed other algoritms. If you want more challenges, try to implement any of them.

## Hints
  - The optimal solution always has 2<sup>n</sup> - 1 moves.
  - **THINK** about how would you remove a disc from a rod and how would you put a disc on to a rod.
