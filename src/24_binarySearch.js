const binarySearch = (array, target, left = 0, right = array.length - 1) => {
    if (left > right) return -1;
    const mid = Math.floor((left + right) / 2);
  
    if (array[mid] === target) return mid;
    if(array[mid] > target) {
        return binarySearch(array, target, left, mid - 1);
    } else {
        return binarySearch(array, target, mid + 1, right);
    };
}


