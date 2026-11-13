let nums = [3, 4, -1, 1];
let set = new Set(nums);
let number = 1;

while (set.has(number)) {
    number++;
}

console.log("Missing Positive:", number);
