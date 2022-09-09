// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */

 const setZeroesHelper = (matrix, row, col) => {
    for (let i = 0; i < matrix[row].length; i++) {
        matrix[row][i] = 0;
    }
        for (let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
    }
}


const setZeroes = (matrix) => {
    const zeroes = []
    
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                zeroes.push([row, col]);
            }
        }
    }
    for (let i = 0; i < zeroes.length; i++) {
        setZeroesHelper(matrix, zeroes[i][0], zeroes[i][1])
    }
};