// /**
//  * @param {number} num
//  * @return {string}
//  */

const intToRoman = (num) => {
    const romans = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = '';

    for (let key in romans) {
        const repeatCounter = Math.floor(num / romans[key]);

        if (repeatCounter !== 0) {
            result += key.repeat(repeatCounter);
        };
        
        num %= romans[key];

        if (num === 0) return result;
    };

    return result;
};





// Example 1:

// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.
// Example 2:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

