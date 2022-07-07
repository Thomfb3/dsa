
const findThreeLargestNumbers = (array) => {
    const threeLargest = [null, null, null];
    for (const num of array) {
        updateLargest(threeLargest, num);
    };
    return threeLargest;
};

const updateLargest = (threeLargest, num) => {
    if (!threeLargest[2] || threeLargest[2] < num) {
        shiftAndUpdate(threeLargest, num, 2);

    } else if (!threeLargest[1] || threeLargest[1] < num) {
        shiftAndUpdate(threeLargest, num, 1);

    } else if (!threeLargest[0] || threeLargest[0] < num) {
        shiftAndUpdate(threeLargest, num, 0);
    };
};
  
const shiftAndUpdate = (array, num, idx) => {
    for (let i = 0; i <= idx; i++) {
        if (i === idx) {
            array[i] = num;
        } else {
            array[i] = array[i + 1]
        };
    };
};
