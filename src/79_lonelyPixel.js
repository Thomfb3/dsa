// /**
//  * @param {character[][]} picture
//  * @return {number}
//  */

// const checkPixels = (obj, val1, val2) => {
//     const result = obj[val1] == undefined ? val2 : -1;
//     obj[val1] = result;
// }

// const checkColandRowPixels = (row, col, rowObj, colObj) => {
//     checkPixels(rowObj, row,  col);
//     checkPixels(colObj, col, row);
// }


const checkColumn = (picture, col) => {
    let pixelCount = 0;
    for (let row = 0; row < picture.length; row++) {
        if (picture[row][col] === "B") {
            pixelCount++
            if (pixelCount > 1) break;
        }
    }
    return pixelCount === 1;
}

const findLonelyPixel = (picture) => {
    let blackPixelCount = 0;
    let checkedCols = {};

    for (let row = 0; row < picture.length; row++) {
        let pixelCount = 0;
        let colToCheck = -1;

        for (let col = 0; col < picture[row].length; col++) {
            if (picture[row][col] === "B") {
                pixelCount++
                if (pixelCount > 1) {
                    colToCheck = -1;
                    break;
                }
                colToCheck = col;
            }
        }

        if (colToCheck !== -1 && checkedCols[colToCheck] === undefined) {
            blackPixelCount += checkColumn(picture, colToCheck) ? 1 : 0;
            checkedCols[colToCheck] = true;
        }
    }
    return blackPixelCount;
};


// const findLonelyPixel2 = (picture) => {
//     var rows = picture.length, cols = picture[0].length, blackPixelCount = 0;
//     var rowCount = new Array(m).fill(0), colCount = new Array(n).fill(0);

//     for (let row = 0; row < rows; row++) {
//         for (let col = 0; col < cols; col++) {
//             if (picture[row][col] == 'B') {
//                 rowCount[row]++;
//                 colCount[col]++;
//             }
//         }
//     }
//     for (let row = 0; row < rows; row++) {
//         for (let col = 0; col < cols; col++) {
//             if (picture[row][col] == 'B' && rowCount[row] == 1 && colCount[col] == 1) {
//                 blackPixelCount++;
//             }
//         }
//     }
//     return blackPixelCount;
// };