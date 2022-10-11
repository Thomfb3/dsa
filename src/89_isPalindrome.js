// /**
//  * @param {string} s
//  * @return {boolean}
//  */


///[^A-Za-z0-9]/g

const isPalindrome = (s) => {
    const regex = /[^A-Za-z0-9]/g;
    const newStr = s.replace(regex, "");
    
    let left = 0;
    let right = newStr.length - 1;

    while(left < right) {
        if(newStr[left].toLowerCase() !== newStr[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.