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
            //if char is number
            tempNum = `${tempNum}${char}`;

        } else if (char === "[") {
            //push tempNum to mult stack and clear tempNum
            multipliers.push(tempNum);
            tempNum = '';

            //push answer to stack and clear stack
            repeatStrings.push(answer);
            answer = '';

        } else if (char === "]") {
            // answer = repeatStrings pop + answer x multipliers pop
            answer = repeatStrings.pop() + answer.repeat(multipliers.pop())

        } else {
            //add char to answer
            answer += char;
        }
    }

    return answer;
};

// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// multipliers = [3];
// tempNum = '';
// repeatStrings = ['',acc];
// answer = 'accaccacc';


// Example 1:
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Example 2:
// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Example 3:
// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"