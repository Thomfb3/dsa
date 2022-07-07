// /**
//  * @param {string} s
//  * @return {boolean}
//  */

//  var checkValidString = function(s) {
//     let openStack = [];
//     let starStack = [];
 
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "(") {
//             openStack.push(i);
//         } else if (s[i] === "*") {
//             starStack.push(i);
//         } else {
//             if (openStack.length) {
//                 openStack.pop();
//             } else if (starStack.length) {
//                 starStack.pop();
//             } else {
//                 return false;
//             };
//         };
//     };
    
//     let i = openStack.length - 1;
//     let j = starStack.length -1;
    
//     while (openStack[i] < starStack[j]) {
//         openStack.pop();
//         starStack.pop();
//         i--;
//         j--;
//     };
    
//     return openStack.length === 0;
// };

const checkValidString = (s) => {
    let lo = hi = 0;

    for (let char of s) {
        lo = char === '(' ? lo + 1 : -1;
        hi = char !== ')' ? hi + 1 : -1;

        if (hi < 0) break;

        lo = Math.max(lo, 0);
    }

    return lo === 0;
}




