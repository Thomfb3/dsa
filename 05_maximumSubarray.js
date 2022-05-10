// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

const maxSubArray = (nums) => {
    let sum = 0;
    let maxSum = -Infinity;

    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[1]

    for(let i = 0;i < nums.length; i++) {
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);
        if(sum < 0) sum = 0;
    };
    return maxSum;
};

// Runtime: 91 ms, faster than 75.06% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 50.4 MB, less than 61.11% of JavaScript online submissions for Maximum Subarray.