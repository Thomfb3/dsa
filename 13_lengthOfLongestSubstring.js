// /**
//  * @param {string} s
//  * @return {number}
//  */


var lengthOfLongestSubstring = function (s) {
    let answer = 0;
    let hash = {};
    //iterate with two pointers
    //the first pointer is the start of the Substring
    //and second pointer will slide down array

    let j = 0; // start pointer
    for (let i = 0; i < s.length; i++) {
        //check for duplicates in hash
        if (hash[s[i]]) {
            // set start pointer to hash value
            j = Math.max(hash[s[i]], j);
        }
        //save answer as the max between answer and the difference between two pointers
        answer = Math.max(answer, i - j + 1)
        //save character and index + 1 to hash 
        hash[s[i]] = i + 1;
    }
    return answer;
};


// s = "abcdedgbh";
//      j    i
// //hash
// {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
// }

// s = "tmmzuxt"
//        ji  
// {
//     t: 1,
//     m: 3,


// }
// ans = 2