
const sortedSquaredArray = (array) => {
    const squares = new Array(array.length).fill(0);
    let smallerIdx = 0;
    let largerIdx = array.length - 1;

    for (let i = array.length - 1; i >= 0; i--) {
        const smallerValue = array[smallerIdx];
        const largerValue = array[largerIdx];

        if (Math.abs(smallerValue) > Math.abs(largerValue)) {
            squares[i] = smallerValue * smallerValue;
            smallerIdx++;
        } else {
            squares[i] = largerValue * largerValue;
            largerIdx--;
        };
    };
    return squares;
};

//array -5 -3  2  4

//squares  25 16 9 4