// /**
//  * @param {string} s
//  * @return {string}
//  */
 
var decodeString = (s) => {
    let multipliers = [];
    let tempNum = '';
    let repeatStrings = [];
    let answer = '';

    for(let char of s) {
        if (!isNaN(char)) {
            tempNum = `${tempNum}${char}`;
        } else if (char === "[") {
            multipliers.push(tempNum);
            tempNum = '';

            repeatStrings.push(answer);
            answer = '';
        } else if (char === "]") {

            answer = repeatStrings.pop() + answer.repeat(multipliers.pop())

        } else {
            answer += char;
        }
    }

    return answer;
};



// Example 1:
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Example 2:
// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Example 3:
// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"