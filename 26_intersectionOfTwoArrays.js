// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */

const intersection = (nums1, nums2) => {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    let res = [];

    set1.forEach((item) => {
        if (set2.has(item)) res.push(item);
    })

    return res;
};