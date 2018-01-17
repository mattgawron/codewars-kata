const charCountReducer = (result, char) => {
  if (result.hasOwnProperty(char)) {
    ++result[char];
  } else {
    result[char] = 1;
  }
  return result;
};

const computeCharCountMap = (string) => {
  return string.split('')
    .filter(char => (/[a-z]/g).test(char))
    .reduce(charCountReducer, {});
};

const countCharReducer = (result, char, charCountMap) => {
  const count = charCountMap[char];
  if (result.hasOwnProperty(count)) {
    result[count] = [...result[count], char];
  } else {
    result[count] = [char];
  }
  return result;
};

const computeCountCharMap = (charCountMap) => {
  const countCharReducerCurried = (result, char) => {
    return countCharReducer(result, char, charCountMap);
  };
  return Object.keys(charCountMap)
    .filter(char => charCountMap[char] > 1)
    .reduce(countCharReducerCurried, {});
};

const uniqueUnion = (first, second) => {
  return Array.from(new Set([...first, ...second])).sort();
};

const removeIfExists = (array, element) => {
  if (array.includes(element)) {
    array.splice(array.indexOf(element), 1);
  }
};

const sortedCountReducer = (result, count, stringData) => {
  const firstChars = stringData.firstCountCharMap[count] || [];
  const secondChars = stringData.secondCountCharMap[count] || [];
  const inFirst = [];
  const inSecond = [];
  const inBoth = [];

  uniqueUnion(firstChars, secondChars)
    .filter((char) => stringData.sortedCharUnion.includes(char))
    .forEach((char) => {
      const isInFirst = firstChars.includes(char);
      const isInSecond = secondChars.includes(char);
      if (isInFirst && isInSecond) {
        inBoth.push(char);
      } else if (isInFirst) {
        inFirst.push(char);
      } else {
        inSecond.push(char);
      }
      removeIfExists(stringData.sortedCharUnion, char);
    });
  result.push({count, inFirst, inSecond, inBoth});
  return result;
};

const formatCharArray = (array, prefix, count) => {
  return array.map(char => prefix + ':' + char.repeat(+count));
};

const countDataReducer = (result, countData) => {
  return [
    ...result,
    ...formatCharArray(countData.inFirst, '1', countData.count),
    ...formatCharArray(countData.inSecond, '2', countData.count),
    ...formatCharArray(countData.inBoth, '=', countData.count)
  ];
};

const mix = (s1, s2) => {
  const firstCharCountMap = computeCharCountMap(s1);
  const secondCharCountMap = computeCharCountMap(s2);
  const firstCountCharMap = computeCountCharMap(firstCharCountMap);
  const secondCountCharMap = computeCountCharMap(secondCharCountMap);
  const firstCharArray = Object.keys(firstCharCountMap);
  const secondCharArray = Object.keys(secondCharCountMap);
  const sortedCharUnion = uniqueUnion(firstCharArray, secondCharArray);
  const firstCountArray = Object.keys(firstCountCharMap);
  const secondCountArray = Object.keys(secondCountCharMap);
  const sortedCountUnion = uniqueUnion(firstCountArray, secondCountArray);

  const stringData = {
    firstCharCountMap,
    secondCharCountMap,
    firstCountCharMap,
    secondCountCharMap,
    sortedCharUnion
  };
  const sortedCountReducerCurried = (result, count) => {
    return sortedCountReducer(result, count, stringData);
  };

  return sortedCountUnion.reverse()
    .reduce(sortedCountReducerCurried, [])
    .reduce(countDataReducer, [])
    .join('/');
};

module.exports = {
  mix
};
