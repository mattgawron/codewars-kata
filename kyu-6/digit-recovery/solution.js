const recover = (str) => {
  let result = '';
  for (let i = 0; i < str.length; ++i) {
    characters:
    for (let length in namesByLength) {
      for (let name of namesByLength[length]) {
        if (i + name.length > str.length) {
          continue;
        }
        if (sortChars(name) === sortChars(str.slice(i, i + name.length))) {
          result += digitByName[name];
          break characters;
        }
      }
    }
  }
  return result.length > 0 ? result : "No digits found";
};

const sortChars = (str) => {
  return str.split('')
    .sort()
    .join('');
};

const namesByLength = {
  3: ['ONE', 'TWO', 'SIX'],
  4: ['ZERO', 'FOUR', 'FIVE', 'NINE'],
  5: ['THREE', 'SEVEN', 'EIGHT']
};

const digitByName = {
  'ZERO': 0,
  'ONE': 1,
  'TWO': 2,
  'THREE': 3,
  'FOUR': 4,
  'FIVE': 5,
  'SIX': 6,
  'SEVEN': 7,
  'EIGHT': 8,
  'NINE': 9
};

module.exports = {
  recover
};
