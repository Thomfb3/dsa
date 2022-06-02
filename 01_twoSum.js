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


const twoSum2 = (nums, target) => {
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if(hash.has(diff)) {
            return [i, hash.get(diff)];
        }
        hash[nums[i]] = i;
    }
};

// Runtime: 81 ms, faster than 77.998% of JavaScript online submissions for TwoSum.