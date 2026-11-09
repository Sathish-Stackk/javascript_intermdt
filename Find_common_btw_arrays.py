let a = [10, 20, 30, 40, 50];
let b = [30, 40, 50, 60, 70];

let common = a.filter(value => b.includes(value));

console.log("Common Elements:", common);
