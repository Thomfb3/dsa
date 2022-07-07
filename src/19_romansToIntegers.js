// /**
//  * @param {string} s
//  * @return {number}
//  */

const romanToInt = (s) => {
    let number = 0;
    const romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 0; i < s.length; i++) {
        if (romans[s[i]] < romans[s[i + 1]]) {
            number -= romans[s[i]];
        } else {
            number += romans[s[i]];
        }
    }

    return number;
};


// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.