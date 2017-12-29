const minMax = (arr) => {
  const initialResult = [arr[0], arr[0]];
  return arr.reduce(updateMinMax, initialResult);
}

const updateMinMax = (result, value) => {
  return [
    value < result[0] ? value : result[0],
    value > result[1] ? value : result[1] 
  ];
};

module.exports = {
  minMax
};
