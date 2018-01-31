const revrot = (str, sz) => {
  if (str.length === 0 || sz <= 0) {
    return '';
  }
  const chunkRegexp = new RegExp(`[0-9]{1,${sz}}`, 'g');
  return str.match(chunkRegexp)
    .filter(chunk => chunk.length === sz)
    .map(chunk => chunk.split(''))
    .map(splittedChunk => splittedChunk.map(digit => +digit))
    .map(processSplittedChunk)
    .map(splittedChunk => splittedChunk.join(''))
    .join('');
};

const processSplittedChunk = splittedChunk => {
  const cubesSum = splittedChunk.map(digit => Math.pow(digit, 3))
    .reduce((sum, cube) => sum + cube, 0);
  if (cubesSum % 2 === 0) {
    return splittedChunk.reverse();
  } else {
    const firstDigit = splittedChunk.shift();
    return [...splittedChunk, firstDigit];
  }
};

module.exports = {
  revrot
};
