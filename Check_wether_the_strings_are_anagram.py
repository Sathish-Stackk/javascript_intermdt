let a = "listen";
let b = "silent";

function isAnagram(str1, str2) {
    let x = str1.split("").sort().join("");
    let y = str2.split("").sort().join("");

    return x === y;
}

console.log(isAnagram(a, b));
