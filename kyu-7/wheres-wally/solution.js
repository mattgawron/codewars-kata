const wheresWally = (string) => {
  const wallyRegexp = /(?:^|\s)Wally(\'s)?[\.,]?(?=\s?)/g;
  let wallyMatchIndex = string.search(wallyRegexp);

  // skip first whitespace character if exists
  if (wallyMatchIndex > -1 && string[wallyMatchIndex] === ' ') {
    ++wallyMatchIndex;
  }
  return wallyMatchIndex;
}

module.exports = {
  wheresWally
};
