/*
  isEven
  This function takes a number and returns true or false
  based on whether the number is even or not
*/

const isEven = (number) => number % 2 == 0;

/*
  isOdd
  This function takes a number and returns true or false
  based on whether the number is odd or not
*/

const isOdd = (number) => !isEven(number);

/*
  square
  This function takes a number and returns the mathematical square
  of that number
*/

const square = (number) => number * number;

/*
  cube
  This function takes a number and returns the mathematical cube
  of that number
*/

const cube = (number) => square(number) * number;

/*
  gcd
  This function returns the greatest common divisor of any two numbers
*/

const gcd = (a,b) => (a * b) / lcm(a, b)


/*
  lcm
  This function returns the least common multiple of any two numbers
*/

const leastOfTwo = (a, b) => a < b ? a : b;

const isDivisibleBy = (number , divisor) => number % divisor == 0

const lcm = function(a, b) {
  let multiple = leastOfTwo(a, b);
  while(!isDivisibleBy(multiple, a) || !isDivisibleBy(multiple, b)) multiple++;
  return multiple;
}


/*
  simpleInterest
  This function returns the simple interest calculated when given
  principle, period and rate of interest(in that order)
*/

const simpleInterest = (principle, time, rate) => (principle * rate * time) / 100;

/*
  compoundInterest
  This function returns the simple interest calculated when given
  principle, period and rate of interest annually(in that order)
*/

const compoundInterest = function(principle, time, rate) {
  let amount = principle;
  while(time > 0) {
    amount = amount + simpleInterest(amount, 1, rate);
    time--;
  }
  return amount - principle;
}


/*
  greatestOf
  This function returns the greatest of three numbers
*/

const greatestOfTwo = (a, b) => a > b ? a : b;

const greatestOf = (a, b, c) => greaterOfTwo(c, greaterOfTwo(a, b));

/*
  averageOf
  This function returns the average of three numbers
*/

const averageOf = (a, b, c) => (a + b + c) / 3;


exports.isEven=isEven;
exports.isOdd=isOdd;
exports.square=square;
exports.cube=cube;
exports.gcd=gcd;
exports.lcm=lcm;
exports.simpleInterest=simpleInterest;
exports.compoundInterest=compoundInterest;
exports.greatestOf=greatestOf;
exports.averageOf=averageOf;
