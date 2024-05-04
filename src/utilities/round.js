const round = (value, { decimals = 0, even = false }) => {
  const divisor = even ? 2 : 1;
  const factor = Math.pow(10, decimals);
  const round = Math.round((value * factor) / divisor) * divisor;

  return round / factor;
};

export default round;
