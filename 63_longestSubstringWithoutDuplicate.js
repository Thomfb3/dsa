function longestSubstringWithoutDuplication(string) {
    let currentSubstring = "";
    let longestSubstring = "";
    let chars = {};

    for (let i = 0; i < string.length; i++) {
        if (!chars.hasOwnProperty(string[i])) {
            chars[string[i]] = i;
            currentSubstring += string[i];
        } else {
            longestSubstring = currentSubstring.length < longestSubstring.length
                ? longestSubstring
                : currentSubstring;

            currentSubstring = "";

            i = chars[string[i]];
            chars[string[i]] = i;
            chars = {};
        }
    }

    return currentSubstring.length < longestSubstring.length
        ? longestSubstring
        : currentSubstring;

}



// string = "clementisacap"
// output = "mentisac"

