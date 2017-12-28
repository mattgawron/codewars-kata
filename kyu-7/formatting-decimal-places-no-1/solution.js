const twoDecimalPlaces = (number) => {
  const multipliedNumber = number * 100;
  const multipliedInteger = number > 0
    ? Math.floor(multipliedNumber)
    : Math.ceil(multipliedNumber);
  return multipliedInteger / 100;
}

module.exports = {
  twoDecimalPlaces
};
