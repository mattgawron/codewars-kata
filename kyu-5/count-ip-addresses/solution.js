const parseIpAddress = (ipAddress) => {
  return ipAddress.split('.')
    .map(field => +field);
};

const computeIpAddressPosition = (ipAddress) => {
  const multipliers = [256**3, 256**2, 256, 1];
  return parseIpAddress(ipAddress).reduce((position, field, index) => {
    return position + field * multipliers[index];
  }, 0);
};

const ipsBetween = (start, end) => {
  const endIpAddressPosition = computeIpAddressPosition(end);
  const startIpAddressPosition = computeIpAddressPosition(start);
  return endIpAddressPosition - startIpAddressPosition;
}

module.exports = {
  ipsBetween
};
