const filterList = (list, predicate) => list.filter(predicate);

/*
  selectOdd
  This function selects all the odd numbers from a given list of numbers
*/

const isOdd = (number) => number % 2 == 1;

const selectOdd = filterList(numbers, isOdd);

/*
  selectEven
  This function selects all the even numbers from a given list of numbers
*/

const isEven = (number) => !isOdd;

const selectEven = filterList(numbers, isEven);

/*
  sumUp
  This function sums up all the numbers of a given list
*/

const add = (first, second) => first + second;

const sumUp = (numbers) => numbers.reduce(add,0);


/*
  reverseList
  This function reverses the elements of a given list and provides a new list
*/

const reverseList = (list) => list.reverse();


/*
  reverseFibo
  This function provides the first n terms of a fibonacci series in reverse order
  This function accepts a single number, n as its only argument.
*/

const generateFiboSerie = function(n, fibo) {
  let fiboSize = fibo.length;
  if(fiboSize >= n) return fibo;
  fibo.push(fibo[fiboSize-1] + fibo[fiboSize-2]);
  return generateFiboSeries(n, fibo);
}

const reverseFibo = function(n) {
  return generateFiboSeries(n, [0, 1]).reverse();
}

/*
  greatestInList
  This function provides the greatest number in a list, given a list of numbers
*/

const greaterOfTwo = (a, b) => a > b ? a : b

const greatestInList = (list) => list.reduce(greaterOfTwo, list[0]);

/*
  leastInList
  This function provides the lowest number in a list, given a list of numbers
*/

const leastOfTwo = (a, b) => a < b ? a : b

const leastInList = (list) => list.reduce(leastOfTwo, list[0]);


/*
  mapLengths
  This function provides a list of lengths corresponding to the list of strings
  given as an argument
*/

const toSize = (string) => string.length;

const mapLengths = (strings) => strings.map(toSize);

/*
  isAscendingOrder
  This function checks if a given list is in ascending order or not
*/

const isInOrder = function(numbers, predicate) {
  for(let index = 0; index < numbers.length-1; index++) {
    if(!predicate(numbers[index], numbers[index + 1])) return false;
  }
  return true;
}

const isIncreasing = (a, b) => a < b;

const isAscendingOrder = (numbers) => isInOrder(numbers , isIncreasing);


/*
  isDescendingOrder
  This function checks if a given list is in descending order or not
*/

const isDecreasing = (a, b) => !isIncreasing(a, b);

const isDescendingOrder = (numbers) => isInOrder(isDecreasing);

/*
  extractDigits
  This function extracts the digits of a given number and returns a list of digits
*/


/*
  countBelowThreshold
  This function provides the count of numbers below given threshold
*/

const countBelowThreshold = (numbers, threshold) => numbers.filter((a) => a < threshold).length;

/*
  countAboveThreshold
  This function provides the count of numbers above given threshold
*/

const countAboveThreshold = (numbers, threshold) => numbers.filter((a) => a > threshold).length;

exports.selectOdd=selectOdd;
exports.selectEven=selectEven;
exports.sumUp=sumUp;
exports.reverseList=reverseList;
exports.reverseFibo=reverseFibo;
exports.greatestInList=greatestInList;
exports.leastInList=leastInList;
exports.mapLengths=mapLengths;
exports.isAscendingOrder=isAscendingOrder;
exports.isDescendingOrder=isDescendingOrder;
exports.extractDigits=extractDigits;
exports.countBelowThreshold=countBelowThreshold;
exports.countAboveThreshold=countAboveThreshold;
