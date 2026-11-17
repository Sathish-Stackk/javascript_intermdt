let numbers = [12, 7, 9, 24, 31, 40];

let grouped = numbers.reduce((result, num) => {
    let key = num % 2 === 0 ? "Even" : "Odd";
    result[key].push(num);
    return result;
}, { Even: [], Odd: [] });

console.log(grouped);
