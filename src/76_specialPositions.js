// /**
//  * @param {number[][]} mat
//  * @return {number}
//  */



const checkRow = (mat, row) => {
    let ones = 0;
    for (const col of mat[row]) {
        if (col === 1) ones++;
    };
    return ones < 2;
};

const checkColumn = (mat, col) => {
    let ones = 0;
    for (let row = 0; row < mat.length; row++) {
        if (mat[row][col] === 1) ones++;
    };
    return ones < 2;
};


const numSpecial = (mat) => {
    let count = 0;
    let checked = {};

    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[row].length; col++) {
            if (mat[row][col] === 1 && !checked[`${col}`]) {
                checked[`${col}`] = true;
                if (checkRow(mat, row) && checkColumn(mat, col)) count++;
            }
        }
    }
    return count;
};





// Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
// Output: 1
// Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.


// [[0,0,0,0,0,1,0,0],[0,0,0,0,1,0,0,1],[0,0,0,0,1,0,0,0],[1,0,0,0,1,0,0,0],[0,0,1,1,0,0,0,0]]

// 0,0,0,0,0,1,0,0
// 0,0,0,0,1,0,0,1
// 0,0,0,0,1,0,0,0
// 1,0,0,0,1,0,0,0
// 0,0,1,1,0,0,0,0

// 2 row 5 col 

// [[0,0,0,1],[1,0,0,0],[0,1,1,0],[0,0,0,0]]

// 0 0 0 1
// 1 0 0 0
// 0 1 1 0 
// 0 0 0 0

// 2 rows 4 cols

// 1 0 0
// 0 0 1
// 1 0 0

// 3 rows 1 col

// 1 1 0
// 0 0 0
// 0 0 0

// 2 cols 0 rows