const wordMapper = (word, index) => {
  if (word.length === 0) {
    return '';
  }
  const isFirstWord = index === 0;
  const firstLetter = word.substring(0, 1);
  const otherLetters = word.substring(1, word.length);
  return [
    isFirstWord ? firstLetter : firstLetter.toUpperCase(),
    otherLetters.toLowerCase()
  ].join('');
};

const toCamelCase = (str) => {
  const delimitersRegexp = /[_\-]/g;
  return str.split(delimitersRegexp)
    .map(wordMapper)
    .join('');
}

module.exports = {
  toCamelCase
};
