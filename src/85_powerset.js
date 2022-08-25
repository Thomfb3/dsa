// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */

const powerset = (nums) => {
    const subsets = [[]];

    for (const el of nums) {
        const len = subsets.length;

        for (let i = 0; i < len; i++) {
            subsets.push(subsets[i].concat(el));
        }
    }
    return subsets;
}

// [1, 2, 3]
// [ [], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3] ] 