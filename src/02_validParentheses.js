// /**
//  * @param {string} s
//  * @return {boolean}
//  */


const isValid = (s) => {
    let stack = [];
    let chars = { "}" : "{",  ")" : "(", "]": "["};
    
    for(let char of s) {
        if(!chars[char]) {
            stack.push(char);
        } else {
            if (chars[char] !== stack.pop()) {
                return false;
            }
        };
    };

    return stack.length === 0;
};

// Runtime: 57 ms, faster than 95.99% of JavaScript online submissions for Valid Parentheses.