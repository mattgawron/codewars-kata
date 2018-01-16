const secondsReductor = (time, multiplier) => {
  const part = Math.floor(time.remainingSeconds / multiplier);
  time.remainingSeconds -= multiplier * part;
  time.parts.push(part);
  return time;
};

const humanReadable = (seconds) => {
  const multipliers = [60**2, 60, 1];
  const time = {
    remainingSeconds: seconds,
    parts: []
  };
  return multipliers.reduce(secondsReductor, time)
    .parts
    .map(part => part < 10 ? '0' + part : part)
    .join(':');
}

module.exports = {
  humanReadable
};
