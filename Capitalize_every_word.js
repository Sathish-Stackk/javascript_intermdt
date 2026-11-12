let sentence = "javascript is easy to learn";

let result = sentence
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");

console.log(result);
