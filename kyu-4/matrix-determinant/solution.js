const determinant = (m) => {
  switch(getSize(m)) {
    case 0: return 0;
    case 1: return m[0][0];
    case 2: return m[0][0] * m[1][1] - m[0][1] * m[1][0]
  }
  return m[0].reduce((result, element, index) => {
    const subMatrix = getSubMatrix(m, index);
    const subMatrixDeterminant = determinant(subMatrix);
    return result + Math.pow(-1, index) * element * subMatrixDeterminant;
  }, 0);
};

const getSize = (m) => m[0].length;

const getSubMatrix = (m, columnToRemove) => {
    return m.slice(1, getSize(m))
      .map(row => [
        ...row.slice(0, columnToRemove),
        ...row.slice(columnToRemove + 1, row.length)
      ]);
};

module.exports = {
  determinant
};
