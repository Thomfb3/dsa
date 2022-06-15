

const smallestDifference = (arrayOne, arrayTwo) => {
    arrayOne.sort((a,b) => a - b);
    arrayTwo.sort((a,b) => a - b);

    let smallestPair = [];
    let idxOne = idxTwo = 0;
    let smallest = current = Infinity;

    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
        let firstNum = arrayOne[idxOne];
        let secondNum = arrayTwo[idxTwo];

        if (firstNum < secondNum) {
            current = secondNum - firstNum;
            idxOne++;
        } else if (firstNum > secondNum) {
            current = firstNum - secondNum;
            idxTwo++;
        } else {
            return [firstNum, secondNum];
        };

        if (current < smallest) {
            smallest = current;
            smallestPair = [firstNum, secondNum];
        };
    };

    return smallestPair;
}