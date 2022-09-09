// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */


const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
const target = 3;

// const binarySearch = (array, target, left = 0, right = array.length - 1) => {
//     if (left > right) return false;

//     const mid = Math.floor((left + right) / 2);
//     if (array[mid] === target) return true;

//     if (array[mid] > target) {
//         return binarySearch(array, target, left, mid - 1)
//     } else {
//         return binarySearch(array, target, mid + 1, right)
//     }
// }

// const searchMatrix = (matrix, target) => {

//     for (let i = 0; i < matrix.length; i++) {
//         if (target <= matrix[i][matrix[i].length - 1]) {
//             return binarySearch(matrix[i], target);
//         }
//     }
//     return false;
// };


const searchMatrix = (matrix, target) => {
    if (matrix.length === 0) return false;
    
    const rows = matrix.length
    const columns = matrix[0].length;

    let low = 0;
    let high = rows * columns;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (matrix[Math.floor(mid / columns)][mid % columns] === target) {
            return true;
        } else if (matrix[Math.floor(mid / columns)][mid % columns] < target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return false;
}








/*
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

*/