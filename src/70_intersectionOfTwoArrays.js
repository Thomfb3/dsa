// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */

const intersection = (nums1, nums2) => {
    let smaller =  nums2;
    let larger = nums1;

    if (nums1.length < nums2.length) {
        smaller =  nums1;
        larger = nums2;
    };

    const hash = {};
    const output = [];

    for (const num of smaller) {
        hash[num] = true;
    }

    for (const num of larger) {
        if (hash[num]) output.push(num);
        hash[num] = false;
    };

    return output;
}

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

//[2]