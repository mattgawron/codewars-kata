const order = (words) => {
  if (!words.includes(' ')) {
    return words;
  }
  return words.split(' ')
    .map(mapWordToWordNumber)
    .sort((first, second) => first.number - second.number)
    .map((wordNumber) => wordNumber.word)
    .join(' ');
}

const mapWordToWordNumber = (word) => {
  return {
    word,
    number: +word.match(/\d+/g)
  };
};

module.exports = {
  order
};
