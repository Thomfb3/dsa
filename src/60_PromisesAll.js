function promiseAll(promises) {
    const output = [];
    let settledPromiseCounter = 0;

    return new Promise((resolve, reject) => {
        promises.forEach((promise, i) => {
            promise.then((value) => {
                output[i] = value;
                settledPromiseCounter++;
                if (settledPromiseCounter === promises.length) {
                    resolve(output);
                }
            })
            .catch(reject);
        });
    });
}


const slowPromise = new Promise((res) => {
    setTimeout(() => res('done'), 100);
});

const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
    slowPromise
];