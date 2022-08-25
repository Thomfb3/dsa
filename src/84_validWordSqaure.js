// /**
//  * @param {string[]} words
//  * @return {boolean}
//  */

const validWordSquare = (words) => {
    let col = 0;
    for (const word of words) {
        let colWord = "";

        for (let row = 0; row < words.length; row++) {
            if (row > word.length - 1) break;
            colWord += words[row][col];
        }

        if (colWord !== word) return false;
        col++
    }
    return true;
}