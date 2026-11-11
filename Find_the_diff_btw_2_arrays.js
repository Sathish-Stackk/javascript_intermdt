let a = [10, 20, 30, 40, 50];
let b = [30, 40, 60];

let difference = a.filter(
    value => !b.includes(value)
);

console.log("Difference:", difference);
