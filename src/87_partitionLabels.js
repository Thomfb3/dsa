// /**
//  * @param {string} s
//  * @return {number[]}
//  */

const partitionLabels = (s) => {
    const last = {};
    for (let i = 0; i < s.length; i++) {
        last[s[i]] = i;
    }

    let answer = [];

    let anchor = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, last[s[i]]);
        
        if (i === end) {
            answer.push(i - anchor + 1);
            anchor = i + 1;
        }
    }
    return answer;
}

const deepEqual = (testArray, expectedArray) => {
    let idx = 0;
    for (let el of testArray) {
        if (el !== expectedArray[idx]) return false;
        idx++;
    }
    return true;
}


console.log(deepEqual(partitionLabels("ababcbacadefegdehijhklij"), [9,7,8]))
console.log(deepEqual(partitionLabels("eccbbbbdec"), [10]))


/*
You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.
Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

Example 1:
Input: s = "ababcbacadefegdehijhklij"
            a       l
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

Example 2:
Input: s = "eccbbbbdec"
            a       
Output: [10]

*/