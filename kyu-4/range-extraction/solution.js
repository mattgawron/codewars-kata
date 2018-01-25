const solution = (list) => {
  return list.reduce((result, value, index) => {
    if (result.subsequentCount === 0) {
      result = getResultForFirstElement(result, value);
    } else if (result.subsequentCount < 3) {
      result = getResultForSecondOrThirdElement(result, value);
    } else {
      result = getResultForNextElementInRange(result, value);
    }
    if (list.length - 1 === index) {
      return printRange(result, value);
    }
    return result;
  }, {extracted: [], subsequentCount: 0})
  .extracted
  .join(',');
}

const getResultForFirstElement = (result, value) => {
  return {extracted: result.extracted, rangeStart: value, subsequentCount: 1};
};

const getResultForSecondOrThirdElement = (result, value) => {
  if (result.rangeStart + result.subsequentCount === value) {
    ++result.subsequentCount;
    return result;
  }
  return printRange(result, value);
};

const getResultForNextElementInRange = (result, value) => {
  if (result.rangeStart + result.subsequentCount === value) {
    ++result.subsequentCount;
    return result;
  }
  return printRange(result, value);
};

const printRange = (result, value) => {
  if (result.subsequentCount > 2) {
    const rangeStart = result.rangeStart;
    const rangeEnd = result.rangeStart + result.subsequentCount - 1;
    result.extracted = [
      ...result.extracted,
      `${rangeStart}-${rangeEnd}`
    ];
  } else if (result.subsequentCount > 1) {
    const firstValue = result.rangeStart;
    const secondValue = result.rangeStart + 1;
    result.extracted = [
      ...result.extracted,
      `${firstValue}`,
      `${result.rangeStart + 1}`
    ];
  } else if (result.subsequentCount > 0) {
    result.extracted = [
      ...result.extracted,
      `${result.rangeStart}`
    ];
  }
  return {extracted: result.extracted, rangeStart: value, subsequentCount: 1};
}

module.exports = {
  solution
};
