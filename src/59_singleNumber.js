
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */

const singleNumber = (nums) => {
    let a = 0;
    for (let num of nums) a ^= num;
    return a;
};


// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1


// const findDuplicate = (nums) => {
//     for (let i = 0; i < nums.length; i++) {
//         let ind = Math.abs(nums[i])-1;

//         if (nums[ind] < 0) {
//             return Math.abs(nums[i]);
//         } else {
//             nums[ind] = -Math.abs(nums[ind]);
//         }
//     }
// };

// Input: nums = [1,3,4,2,2]
// 1 + 2 + 3 + 4 + 5 = 15
// 1 + 2 + 2 + 3 + 4 = 12

// 15 - 12 = 3
// 5 - 2
 
const findDuplicate = (nums) => {
    let slow = nums[0];
    let fast = nums[nums[0]];

    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }

    slow = 0;

    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast]
    }

    return slow;
}