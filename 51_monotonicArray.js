
// const isMonotonic = (array) => {
//     if (array.length <= 2) return true;
  
//     let direction = array[0] - array[1];
//     let increasing = array[0] < array[1];
    
//     for (let i = 2; i < array.length; i++) {
//         if (direction === 0) {
//             direction = array[i] - array[i - 1];
//             increasing = array[i] > array[i - 1];
//             continue;
//         };

//         if (increasing && array[i] < array[i - 1]) {
//             return false;
//         } else if (!increasing && array[i] > array[i - 1]) {
//             return false;
//         };
//     };

//     return true;
// };


// const isMonotonic = (array) => {
//     let isNonIncreasing = true;
//     let isNonDecreasing = true;

//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > array[i - 1]) isNonIncreasing = false;
//         if (array[i] < array[i - 1]) isNonDecreasing = false;
//     };

//     return isNonIncreasing || isNonDecreasing;
// }


const isMonotonic = (array) => {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) isIncreasing = false;
        if (array[i] > array[i - 1]) isDecreasing = false;
    };
    
    return isIncreasing || isDecreasing;
}