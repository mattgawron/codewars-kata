const oppositeDirections = {
  'NORTH': 'SOUTH',
  'SOUTH': 'NORTH',
  'WEST': 'EAST',
  'EAST': 'WEST'
};

const directionsReductor = (reducedArray, direction, index, originalArray) => {
  const oppositeDirection = oppositeDirections[direction];
  const isPreviousOpposite = reducedArray.length > 0
    ? reducedArray[reducedArray.length - 1] === oppositeDirection
    : false;

  if (isPreviousOpposite) {
    reducedArray.pop();
  } else {
    reducedArray.push(direction);
  }
  return reducedArray;
};

const dirReduc = (arr) => {
  return arr.reduce(directionsReductor, []);
}

module.exports = {
  dirReduc
};
