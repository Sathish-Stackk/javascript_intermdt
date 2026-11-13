async function retry(callback, attempts) {
    for (let i = 1; i <= attempts; i++) {
        try {
            return await callback();
        } catch (error) {
            console.log("Attempt:", i);
        }
    }

    throw new Error("All attempts failed");
}

retry(() => Promise.resolve("Success"), 3)
    .then(console.log)
    .catch(console.error);
