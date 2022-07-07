
const isPalindrome = (string) => {
    let end = string.length - 1;
    let start = 0;

    while (start < end) {
        if (string[start] !== string[end]) return false;
        start++;
        end--;
    };
    
    return true;
};
  