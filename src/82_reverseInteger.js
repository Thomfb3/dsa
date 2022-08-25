// /**
//  * @param {number} x
//  * @return {number}
//  */

const reverse = (x) => {
    let xString = Math.abs(x).toString();
    let newString = "";

    for (let i = xString.length - 1; i >= 0; i--) {
        newString += xString[i];
    }

    let answer = x >= 0 ? +newString : 0 - newString;
    return Math.abs(answer) > 2147483647 ? 0 : answer;
};