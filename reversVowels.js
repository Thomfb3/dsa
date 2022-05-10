// /**
//  * @param {string} s
//  * @return {string}
//  */

var reverseVowels = (s) => {
    const VOWELS = new Set(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]);
    let vowels = [];
    let res = "";

    for (let i = s.length - 1; i >= 0; i--) {
        if (VOWELS.has(s[i])) vowels.push(s[i]);
    };

    let j = 0;
    for (let i = 0; i < s.length; i++) {
        if (!VOWELS.has(s[i])) {
            res += s[i];
        } else {
            res += vowels[j];
            j++;
        }
    };

    return res;
};

// Input: s = "hello"
// Output: "holle"


//REGEX

var reverseVowels = (s) => {
    let vowels = s.match(/[aeiou]/gi);
    return s.replace(/[aeiou]/gi, () => vowels.pop());
}