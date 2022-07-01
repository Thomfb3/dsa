// /**
//  * @param {number} x
//  * @return {boolean}
//  */

//bool
const isPalindrome = (num) => {
    if (num < 0) return false;
    if (num < 10) return true;
    if (num % 10 === 0) return false;

    num = num.toString();
    let left = 0;
    let right = num.length - 1;

    while (left < right) {
        if (num[left] !== num[right]) return false;
        left++;
        right--;
    }

    return true;
}