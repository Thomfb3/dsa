
const moveElementToEnd = (array, toMove) => {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        if(array[right] === toMove) {
            right--;
        } else if (array[left] === toMove) {
            swap(left, right, array);
            left++;
        } else {
            left++;
        };
    };
    
    return array;
};

const swap = (i, j, array) => {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
};

// [2,1,2,2,2,3,4,2]