const threeAmigos = (numbers) => {
  return numbers.reduce((result, _, index) => {
    if (index === 0 || index === numbers.length - 1) {
      return result;
    }
    const subarray = numbers.slice(index - 1, index + 2);
    // if there was no valid result found replace it with subarray
    // if subarray's elements have the same parity
    const hasSameParity = getSameParity(subarray);
    if (result.length !== 3) {
      return hasSameParity ? subarray : result;
    }
    // if there was any valid result found then replace it with subarray
    // if subarray's elements have the same parity and it's range is lower
    const range = getRange(subarray);
    if (hasSameParity && getRange(subarray) < getRange(result)) {
      return subarray;
    }
    return result;
  }, [])
};

const getRange = (array) => {
  const min = Math.min(array[0], Math.min(array[1], array[2]));
  const max = Math.max(array[0], Math.max(array[1], array[2]));
  return max - min;
};

const getSameParity = (array) => {
  const parities = array.map(number => number % 2);
  return parities[0] === parities[1] && parities[1] === parities[2];
};

module.exports = {
  threeAmigos
};
