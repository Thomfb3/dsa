// /**
//  * @param {number[]} nums
//  * @return {number}
//  */


const dominantIndex = (nums) => {
    let max = 0;
    let idx = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            idx = nums[i] >= max * 2 ? i : -1;
            max = nums[i];
            continue;
        } else {
            idx = max / 2 < nums[i] ? -1 : idx;
        };
    };

    return idx;
};