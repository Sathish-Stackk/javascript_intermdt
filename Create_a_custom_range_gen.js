function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

for (let num of range(5, 15)) {
    console.log(num);
}
