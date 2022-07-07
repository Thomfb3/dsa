function subarraySort(array) {
    let minOutOfOrder = Infinity;
    let maxOutOfOrder = -Infinity;
  
    for (let i = 0; i < array.length; i++) {
      const num = array[i];
      //check if current num is out of order
      if (isOutOfOrder(i, num, array)) {
        minOutOfOrder = Math.min(minOutOfOrder, num);
        maxOutOfOrder = Math.max(maxOutOfOrder, num);
      };
    };
    
    if (minOutOfOrder === Infinity) {
      return [-1, -1];
    };
  
    let subarrayLeftIdx = 0;
    while (minOutOfOrder >= array[subarrayLeftIdx]) {
      subarrayLeftIdx++;
    };
  
    let subarrayRightIdx = array.length - 1;
    while (maxOutOfOrder <= array[subarrayRightIdx]) {
      subarrayRightIdx--;
    };
      
    return [subarrayLeftIdx, subarrayRightIdx];
  }
  
  //is out of order function
  function isOutOfOrder(i, num, array) {
    if (i === 0) return num > array[i + 1];
    if (i === array.length - 1) return num < array[i - 1];
    return num > array[i + 1] || num < array[i - 1];
  }






// This functions works but it is - Time o(n log n) Space o(n)
function subarraySortBad(array) {
    let newArray = [...array];
    let sorted = newArray.sort((a, b) => a - b);
    let mismatched = [];

    for (let i = 0; i < array.length; i++) {
        if (sorted[i] !== array[i]) {
            mismatched.push(i);
        }
    }

    return mismatched.length > 0 ?
        [(mismatched[0]), mismatched[mismatched.length - 1]] :
        [-1, -1];
}
