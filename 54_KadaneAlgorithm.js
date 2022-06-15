
const kadanesAlgorithm = (array) => {
    let currentSum = array[0];
    let bestSum = array[0];

    for (let i = 1; i < array.length; i++) {
        const num = array[i];
        currentSum = Math.max(num, currentSum + num);
        bestSum = Math.max(currentSum, bestSum);
    };

    return bestSum;
};


