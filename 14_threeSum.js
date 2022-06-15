// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */

const threeNumberSum = (array, targetSum) => {
    array.sort((a,b) => a - b);
    let triplets = [];

    for (let i = 0; i < array.length; i++) {
        let left = i + 1;
        let right = array.length - 1;

        while (left < right) {
            let currentSum = array[i] + array[left] + array[right];

            if (currentSum === targetSum) {
                triplets.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if (currentSum < targetSum) {
                left++;
            } else if (currentSum > targetSum) {
                right--;
            };
        };
    };

    return triplets;
};
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.


// [1,2,3,4,5,6,7,8]

// target = 6;


