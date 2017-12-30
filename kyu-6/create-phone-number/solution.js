const createPhoneNumber = (numbers) => {
  const numberParts = [
    joinSubarrayElements(numbers, 0, 3),
    joinSubarrayElements(numbers, 3, 6),
    joinSubarrayElements(numbers, 6, 10)
  ];
  return `(${numberParts[0]}) ${numberParts[1]}-${numberParts[2]}`;
}

const joinSubarrayElements = (array, begin, end) => {
  return array.slice(begin, end).join('');
};

module.exports = {
  createPhoneNumber
};
