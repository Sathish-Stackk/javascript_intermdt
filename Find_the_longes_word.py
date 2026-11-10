let sentence = "JavaScript makes web development interesting";

let words = sentence.split(" ");
let longest = words.reduce((a, b) =>
    a.length > b.length ? a : b
);

console.log("Longest Word:", longest);
