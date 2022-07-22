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

    for (let row = 0; row < picture.length; row++) {
        let pixelCount = 0;
        let colsToCheck = [];

        for (let col = 0; col < picture[row].length; col++) {
            if (picture[row][col] === "B") {
                pixelCount++
                if (pixelCount > 1) {
                    colsToCheck = [];
                    break;
                }
                colsToCheck.push(col)
            }
        }

        while (colsToCheck.length) {
            blackPixelCount += checkColumn(picture, colsToCheck.pop()) ? 1 : 0;
        }
    }
    return blackPixelCount;
};

