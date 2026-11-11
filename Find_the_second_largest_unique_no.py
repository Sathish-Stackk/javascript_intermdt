let nums = [12, 45, 23, 67, 45, 89];

let unique = [...new Set(nums)];
unique.sort((a, b) => b - a);

console.log("Second Largest:", unique[1]);
