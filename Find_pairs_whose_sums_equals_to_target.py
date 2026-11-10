let nums = [2, 4, 3, 5, 7, 8];
let target = 10;
let pairs = [];

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            pairs.push([nums[i], nums[j]]);
        }
    }
}

console.log(pairs);
