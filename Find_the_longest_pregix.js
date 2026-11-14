let words = ["flower", "flow", "flight"];

let prefix = words[0];

for (let word of words) {
    while (!word.startsWith(prefix)) {
        prefix = prefix.slice(0, -1);
    }
}

console.log("Common Prefix:", prefix);
