
function intersection(a, b) {
  return [...new Set(a)].filter(item => b.includes(item));
}

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
