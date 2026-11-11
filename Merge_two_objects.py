let student = {
    name: "Ravi",
    age: 21
};

let details = {
    course: "AIML",
    marks: 90
};

let result = { ...student, ...details };

console.log(result);
