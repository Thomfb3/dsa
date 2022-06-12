
const bubbleSort = (array) => {
    let sorted = false;
    let counter = 0;

    while(!sorted) {
        sorted = true;
        
        for (let i = 0; i < array.length - 1 - counter; i++) {
            if (array[i] > array[i + 1]) {
                swap(i, i + 1, array);
                sorted = false;
            };
        };
        counter++;
    };

    return array;
};



const swap = (i, j, array) => {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp;
};
  