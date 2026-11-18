
const people = [
  { name: "Ravi", age: 25 },
  { name: "Kiran", age: 19 },
  { name: "Arun", age: 22 }
];

people.sort((a, b) => a.age - b.age);
console.log(people);
