
function rotateArray(arr, steps) {
  steps %= arr.length;
  return [...arr.slice(-steps), ...arr.slice(0, -steps)];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
