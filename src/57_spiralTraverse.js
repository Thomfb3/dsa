
const spiralTraverse = (array) => {
    const results = [];
    let startRow = startCol = 0, 
      endRow = array.length - 1, 
      endCol = array[0].length - 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            results.push(array[startRow][col]);
        };

        for (let row = startRow + 1; row <= endRow; row++) {
            results.push(array[row][endCol]);
        };

        for (let col = endCol - 1; col >= startCol; col--) {
            if (startRow === endRow) break;
            results.push(array[endRow][col]);
        };

        for (let row = endRow - 1; row > startRow; row--) {
            if (startCol === endCol) break;
            results.push(array[row][startCol]);
        };

        startRow++;
        endRow--;
        startCol++;
        endCol--;
    };
    return results;
};


// {
//     "array": [
//       [1, 2, 3, 4],
//       [10, 11, 12, 5],
//       [9, 8, 7, 6]
//     ]
// }


// array = [
//     [1, 2, 3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10, 8, 8, 7]
// ]

// output = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]