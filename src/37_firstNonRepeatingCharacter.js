
const firstNonRepeatingCharacter = (string) => {
    const characterFrequency = {};

    for (const char of string) {
        if (!characterFrequency[char]) {
            characterFrequency[char] = 1;
        } else {
            characterFrequency[char]++;
        };
    };

    for (let i = 0; i < string.length; i++) {
        if (characterFrequency[string[i]] === 1) {
            return i;
        };
    };
    
    return -1;
}
  
