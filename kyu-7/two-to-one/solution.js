const mapStringToLetters = (string) => string.split('');

const filterUniqueElements = (array) => {
  const reductor = (result, element) => {
    if (!result.includes(element)) {
      result.push(element);
    }
    return result;
  };
  return array.reduce(reductor, []);
};

const longest = (s1, s2) => {
  const firstStringLetters = mapStringToLetters(s1);
  const secondStringLetters = mapStringToLetters(s2);
  const allLetters = [...firstStringLetters, ...secondStringLetters];
  return filterUniqueElements(allLetters).sort().join('');
};

module.exports = {
  longest
};
