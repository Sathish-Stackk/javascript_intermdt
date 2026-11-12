let keys = ["name", "age", "course"];
let values = ["Sathish", 21, "AIML"];

let result = {};

keys.forEach((key, index) => {
    result[key] = values[index];
});

console.log(result);
