const solution = (number) => {
  const valueSymbolMappings = [
    getValueSymbolMapping(1000, 'M'),
    getValueSymbolMapping(900, 'CM'),
    getValueSymbolMapping(500, 'D'),
    getValueSymbolMapping(400, 'CD'),
    getValueSymbolMapping(100, 'C'),
    getValueSymbolMapping(90, 'XC'),
    getValueSymbolMapping(50, 'L'),
    getValueSymbolMapping(40, 'XL'),
    getValueSymbolMapping(10, 'X'),
    getValueSymbolMapping(9, 'IX'),
    getValueSymbolMapping(5, 'V'),
    getValueSymbolMapping(4, 'IV'),
    getValueSymbolMapping(1, 'I')
  ];
  return valueSymbolMappings.reduce((result, valueSymbolMapping) => {
      const remainingNumber = result.remainingNumber;
      const {value, symbol} = valueSymbolMapping;
      if (remainingNumber >= value) {
        const symbolCount = Math.floor(remainingNumber / value);
        result.remainingNumber -= symbolCount * value;
        result.encodedValue += symbol.repeat(symbolCount);
      }
      return result;
    }, {remainingNumber: number, encodedValue: ''})
    .encodedValue;
}

const getValueSymbolMapping = (value, symbol) => {
  return {value, symbol};
};

module.exports = {
  solution
};
