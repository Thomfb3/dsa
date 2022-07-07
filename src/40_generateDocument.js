
const generateDocument = (characters, document) => {
    const characterFrequency = {};

    for (const char of characters) {
        if(!characterFrequency[char]) {
            characterFrequency[char] = 1;
        } else {
            characterFrequency[char]++;
        };
    };

    for (const char of document) {
        if (!characterFrequency[char] || characterFrequency[char] === 0) {
            return false;
        } else {
            characterFrequency[char]--;
        };
    };

    return true;
}
  