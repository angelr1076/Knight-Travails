const knightFactory = (x, y, distance = null, visited = null) => {
  return {
    x: null,
    y: null,
    distance,
    visited,
    neighbors: [],
  };
};

const createGameBoard = () => {
  const chessBoard = new Array(8).fill(null).map(() => new Array(8).fill(null));

  return chessBoard;
};

const getLegalMoves = (knightPosX, knightPosY) => {
  let x = knightPosX;
  let y = knightPosY;

  let legalMoves = [
    { x: x + 2, y: y + 1 },
    { x: x + 2, y: y - 1 },
    { x: x - 2, y: y + 1 },
    { x: x - 2, y: y - 1 },
    { x: x + 1, y: y + 2 },
    { x: x - 1, y: y + 2 },
    { x: x - 1, y: y - 2 },
    { x: x + 1, y: y - 2 },
  ];

  legalMoves = legalMoves.filter(
    move => move.x >= 0 && move.x <= 7 && move.y >= 0 && move.y <= 7,
  );

  return legalMoves;
};

const knightGraph = (board, moves) => {
  // Create an empty graph object to represent the board.
  let graph = {};

  // Iterate over each square on the board.
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      // Create a new knight node for the current square.
      const currentNode = knightFactory(x, y);

      // Calculate the legal moves for the current square.
      moves = getLegalMoves(x, y);

      // Add each legal move as a neighbor to the current node.
      for (const move of moves) {
        const neighborX = move.x;
        const neighborY = move.y;

        // Look up the neighbor node in the graph using its coordinates.
        const neighborNode = graph[`${neighborX},${neighborY}`];

        // If the neighbor node hasn't been created yet, create it.
        if (!neighborNode) {
          graph[`${neighborX},${neighborY}`] = knightFactory(
            neighborX,
            neighborY,
          );
        }

        // Add the neighbor node to the current node's neighbors.
        currentNode.neighbors.push(graph[`${neighborX},${neighborY}`]);
      }

      // Add the current node to the graph.
      graph[`${x},${y}`] = currentNode;
    }
  }

  // Return the completed graph object.
  return graph;
};

// Helpers
const visualizeSolution = path => {
  // Create an empty chessboard
  const chessBoard = createGameBoard();

  // Mark each square in the path with an X
  for (let i = 0; i < path.length; i++) {
    const pos = path[i];
    chessBoard[pos.x][pos.y] = 'X';
  }

  // Print the chessboard to the console
  console.log(chessBoard.map(row => row.join(' ')).join('\n'));
};
