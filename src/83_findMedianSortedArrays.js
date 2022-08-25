// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */

 const findMedianSortedArrays = (nums1, nums2) => {
    let array = [...nums1, ...nums2];
    array.sort((a,b) => a - b);

    if (array.length === 1) return array[0];
    
    if (array.length % 2 === 0) {
        return (array[array.length / 2 - 1] + array[array.length / 2]) / 2;
    } else {
        return array[Math.ceil(array.length / 2 - 1)];
    }
};