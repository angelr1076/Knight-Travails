function createQueue() {
  const elements = [];

  const el = () => elements;

  function enqueue(element) {
    return elements.push(element);
  }

  function dequeue() {
    return elements.shift();
  }

  function isEmpty() {
    return elements.length === 0;
  }

  return {
    elements,
    enqueue,
    dequeue,
    isEmpty,
  };
}

const knightFactory = (x, y, distance = null, visited = false, prev = null) => {
  return {
    x,
    y,
    distance,
    visited,
    prev,
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

const knightMoves = (startPos, endPos) => {
  const visited = new Set();

  const startingX = startPos[0];
  const startingY = startPos[1];
  let startingKnight = knightFactory(startingX, startingY, 0, true, null);
  visited.add(`${startingX}, ${startingY}`);

  // Create a queue using the queue function and enqueue the startingKnight object.
  const queue = createQueue();
  queue.enqueue(startingKnight);

  while (!queue.isEmpty()) {
    const current = queue.dequeue();

    if (current.x === endPos[0] && current.y === endPos[1]) {
      const path = [];
      let node = current;
      while (node !== null) {
        path.unshift([node.x, node.y]);
        node = node.prev;
      }
      const distance = path.length;
      const message = `You made it in ${distance} moves! Here's your path:\n${path.join(
        '\n',
      )}\n`;
      return message;
    } else {
      const checkLegalMoves = getLegalMoves(current.x, current.y);

      for (let move of checkLegalMoves) {
        const newKnight = knightFactory(
          move.x,
          move.y,
          current.distance + 1,
          true,
        );

        const newPosKey = `${move.x}, ${move.y}`;
        if (!visited.has(newPosKey)) {
          visited.add(newPosKey);
          newKnight.prev = current;
          queue.enqueue(newKnight);
        }
      }
    }
  }

  return null;
};

const testPath = knightMoves([0, 0], [1, 2]); // ==[[0, 0],[1, 2],];
const testPath2 = knightMoves([0, 0], [3, 3]); // == [[0, 0],[1, 2],[3, 3]];
const testPath3 = knightMoves([3, 3], [0, 0]); // == [[3, 3],[1, 2],[0, 0],];
console.log(testPath, testPath2, testPath3);
