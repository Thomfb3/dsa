// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.


const productSum = (array, multiplier = 1) => {
    let sum = 0;
    for (const elem of array) {
        if (Array.isArray(elem)) {
            sum += productSum(elem, multiplier + 1);
        } else {
            sum += elem;
        };
    };
    return sum * multiplier;
}
