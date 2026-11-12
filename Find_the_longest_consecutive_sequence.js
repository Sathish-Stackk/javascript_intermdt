let nums = [100, 4, 200, 1, 3, 2];
let set = new Set(nums);
let longest = 0;

for (let num of set) {
    if (!set.has(num - 1)) {
        let count = 1;

        while (set.has(num + count)) {
            count++;
        }

        longest = Math.max(longest, count);
    }
}

console.log("Longest Sequence:", longest);
