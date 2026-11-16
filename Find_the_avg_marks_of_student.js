let students = [
    { name: "Ravi", marks: 85 },
    { name: "Arun", marks: 90 },
    { name: "Kiran", marks: 75 },
    { name: "John", marks: 80 }
];

let total = students.reduce(
    (sum, student) => sum + student.marks, 0
);

let average = total / students.length;

console.log("Average Marks:", average);
