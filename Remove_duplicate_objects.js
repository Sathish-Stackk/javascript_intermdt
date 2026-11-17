let users = [
    { id: 1, name: "Ram" },
    { id: 2, name: "Sam" },
    { id: 1, name: "Ram" }
];

let unique = users.filter((user, index, arr) =>
    index === arr.findIndex(item => item.id === user.id)
);
console.log(unique);
