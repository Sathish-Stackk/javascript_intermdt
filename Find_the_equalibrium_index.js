let nums = [1, 3, 5, 2, 2];
let total = nums.reduce((a, b) => a + b, 0);
let left = 0;

for (let i = 0; i < nums.length; i++) {
    total -= nums[i];

    if (left === total) {
        console.log("Equilibrium Index:", i);
        break;
    }

    left += nums[i];
}
