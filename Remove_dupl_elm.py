let numbers = [10, 20, 10, 30, 40, 20, 50];

let result = numbers.filter(
    (value, index) => numbers.indexOf(value) === index
);

console.log(result);
