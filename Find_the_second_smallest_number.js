let nums = [45, 12, 78, 23, 9, 34];

let unique = [...new Set(nums)];
unique.sort((a, b) => a - b);

console.log("Second Smallest:", unique[1]);
