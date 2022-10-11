// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */

const isSubstring = (str, words, idx) => {
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(str) && i !== idx) {
            return true
        }
    }
    return false;
}


const stringMatching = (words) => {
    const matches = [];

    for (let i = 0; i < words.length; i++) {
        if (isSubstring(words[i], words, i)) {
            matches.push(words[i])
        }
    }
    return matches;
};
