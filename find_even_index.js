const sumArrayVals = arr => arr.reduce(( acc, cur ) => acc + cur, 0);

const findEvenIndex = arr => arr.findIndex((el, i) => sumArrayVals(arr.slice(0, i)) === sumArrayVals(arr.slice(i + 1)));
