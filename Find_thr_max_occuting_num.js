let nums = [4, 7, 4, 2, 7, 4, 9, 7, 7];
let count = {};

for (let n of nums) {
    count[n] = (count[n] || 0) + 1;
}

let max = Object.keys(count).reduce((a, b) =>
    count[a] > count[b] ? a : b
);

console.log("Maximum Occurring:", max);
