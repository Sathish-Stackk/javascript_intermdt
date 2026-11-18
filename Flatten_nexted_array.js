const data = [1, [2, [3, 4]], [5, 6]];

function flatten(arr) {
  return arr.reduce((result, item) =>
    result.concat(Array.isArray(item) ? flatten(item) : item), []);
}

console.log(flatten(data));
