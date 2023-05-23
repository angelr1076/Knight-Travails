# Knights Travails

[Play Knights Travails](https://angelr1076.github.io/Knight-Travails/)

## Introduction

A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns (don’t believe it? See [this animation](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/ruby_programming/computer_science/project_knights_travails/imgs/00.png 'Link to chess board animation')). Its basic move is two steps forward and one step to the side. It can face any direction.

Knights Travails board

![Chess Board](./assets/01.png 'Knights Travails Example')

## Project

The project uses a Breadth-First Search (BFS) algorithm, knightMoves, that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

You can think of the board as having 2-dimensional coordinates. The function looks like:
- `knightMoves([0,0],[1,2]) == [[0,0],[1,2]]`
- `knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]`
- `knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]`

All the possible places you can end up after one move look like this:

```
1  > knightMoves([3,3],[4,3])
2  => You made it in 3 moves!  Here's your path:
3    [3,3]
4    [4,5]
5    [2,4]
6    [4,3]

//   0 1 2 3 4 5 6 7
// 0|_|_|_|_|_|_|_|_|
// 1|_|_|_|_|_|_|_|_|
// 2|_|_|_|_|_|_|_|_|
// 3|_|_|_|_|_|_|_|_|
// 4|_|_|_|_|_|_|_|_|
// 5|_|_|_|_|_|_|_|_|
// 6|_|_|_|_|_|_|_|_|
// 7|_|_|_|_|_|_|_|_|
```
![gameplay screenshot](./assets/gameplay_img.png 'Image of Knights Travail gameplay')

The entire script creates a game board and a knight.

All possible moves the knight can make are children in a tree. Moves are not allowed to go off the board.  The script takes care of this.

Decide which search algorithm is best to use for this case. Hint: one of them could be a potentially infinite series.

## Gameplay

Gameplay is simple: start by clicking on the chessboard square for the starting point, then select the end point and press the "Find Path" button to reveal your path. Reset the gameboard by pressing the "Reset" button at any time.


