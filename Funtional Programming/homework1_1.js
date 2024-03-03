let arr = [1,2,3,4,5,6,7,8,9,10];
const findNumber = arr.filter(number => number - 1 && number - 3 && number - 5 && number - 7 && number - 9);
const xNumber = findNumber.map((x => x*1000));
console.log(xNumber);

