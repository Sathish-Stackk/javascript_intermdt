let nums = [0, 1, 0, 3, 12, 0, 5];

let result = nums.filter(n => n !== 0);
let zeros = nums.length - result.length;

result.push(...Array(zeros).fill(0));

console.log(result);
