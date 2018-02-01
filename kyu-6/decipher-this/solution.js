const decipherThis = (str) => {
  return str.split(' ')
    .map(decodeSingleWord)
    .join(' ');
};

const decodeSingleWord = (word) => {
  const encodedRegexp = /(\d+)(\w+)/;
  const [original, firstLetterCode, otherChars] = word.match(encodedRegexp);
  const firstLetter = String.fromCharCode(+firstLetterCode);
  const decryptedOtherChars = swapFirstAndLastCharacter(otherChars);
  return firstLetter + decryptedOtherChars;
};

const swapFirstAndLastCharacter = (word) => {
  if (word.length < 2) {
    return word;
  }
  const firstCharacter = word[0];
  const middle = word.slice(1, word.length - 1);
  const lastCharacter = word[word.length - 1];
  return lastCharacter + middle + firstCharacter;
};

module.exports = {
  decipherThis
};
