let nums = [4, 7, 2, 9, 7, 4];
let seen = new Set();

for (let num of nums) {
    if (seen.has(num)) {
        console.log("First Duplicate:", num);
        break;
    }
    seen.add(num);
}
