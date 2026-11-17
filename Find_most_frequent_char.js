function frequentChar(str) {
    let count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return Object.keys(count).reduce((a, b) =>
        count[a] >= count[b] ? a : b
    );
}
console.log(frequentChar("javascript"));
