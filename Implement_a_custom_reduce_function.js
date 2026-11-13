function customReduce(arr, callback, initialValue) {
    let result = initialValue;

    for (let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i], i, arr);
    }

    return result;
}

let nums = [10, 20, 30, 40];

let total = customReduce(
    nums,
    (sum, num) => sum + num,
    0
);

console.log("Total:", total);
