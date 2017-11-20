const getSum = arr => arr.reduce((accum, el) => {
  accum += el;
  return accum;
}, 0);

const findEvenIndex = arr => arr.findIndex((el, i) => getSum(arr.slice(0, i)) === getSum(arr.slice(i + 1)));
