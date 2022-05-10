// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

const twoSum = (nums, target) => {
    let hash = {};

    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        
        if(hash.hasOwnProperty(diff)) {
            return [i, hash[diff]]
        }
        hash[nums[i]] = i;
    }
};


// Runtime: 81 ms, faster than 77.998% of JavaScript online submissions for TwoSum.