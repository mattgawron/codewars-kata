const Xbonacci = (signature, n) => {
  const signatureLength = signature.length;
  const sequence = signature;

  if (n <= signatureLength) {
    return signature.slice(0, n);
  }
  for (let i = signatureLength; i < n; ++i) {
    const nextElement = sequence.slice(i - signatureLength, i)
      .reduce((sum, element) => sum + element, 0);
    sequence.push(nextElement);
  }
  return sequence;
}

module.exports = {
  Xbonacci
};
