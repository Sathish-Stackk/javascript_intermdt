let text = "javascript";
let frequency = {};

for (let char of text) {
    frequency[char] = (frequency[char] || 0) + 1;
}

console.log(frequency);
