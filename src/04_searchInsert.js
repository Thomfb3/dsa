// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */


const searchInsert = (nums, target) => {
    let start = 0;
    let end = nums.length-1;
    let mid;

    while(start <= end) {
        mid = Math.floor((start + end) / 2);

        if(target === nums[mid]) return mid;
        if(target > nums[mid]) start = mid + 1;
        if(target < nums[mid]) end = mid - 1;
    };
    return start;
};


// Runtime: 59 ms, faster than 92.15% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 41.9 MB, less than 92.16% of JavaScript online submissions for Search Insert Position.