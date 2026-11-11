let text = "JavaScript Programming";
let vowels = "aeiou";
let count = 0;

for (let char of text.toLowerCase()) {
    if (vowels.includes(char)) {
        count++;
    }
}

console.log("Vowel Count:", count);
