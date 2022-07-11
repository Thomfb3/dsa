// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @param {number[]} nums3
//  * @return {number[]}
//  */

// const twoOutOfThree = (nums1, nums2, nums3) => {
//     const map = {}
//     const output = [];

    
//     for (const num of nums1) {
//         if (!map[num]) map[num] = 1;
//     }

//     for (const num of nums2) {
//         if (!map[num]) map[num] = 1;
//         if (map[num] === 1) {
//             output.push(num);
//             map[num] = 2;
//         }
//     }

//     for (const num of nums3) {
//         if (map[num] === 1) output.push(num)
//     }

//     return output;
//  }

const twoOutOfThree = (nums1, nums2, nums3) => {
    const output = [];
    const set1 = new Set(nums1), set2 = new Set(nums2), set3 = new Set(nums3);
    const all = new Set([...nums1, ...nums2, ...nums3]);

    all.forEach((val) => {
        if ((set1.has(val) + set2.has(val) + set3.has(val)) >= 2) output.push(val);
    })

    return output;
}



//  const twoOutOfThree = (nums1, nums2, nums3) => {
//     const set1 = new Set(nums1);
//     const set2 = new Set(nums2);
//     const set3 = new Set(nums3);
//     const all = new Set([...set1, ...set2, ...set3]);
//     const output = [];


//     for(const num of all) {
//         if (
//             (set1.has(num) && set2.has(num)) ||
//             (set1.has(num) && set3.has(num)) ||
//             (set2.has(num) && set3.has(num))
//             ) {
//                 output.push(num)
//             }
//     }
//     return output;
//  }

// const twoOutOfThree = (nums1, nums2, nums3) => {
//     let longestArr = determineLongest(nums1, nums2, nums3);
//     let otherArrays = determineOtherArrays(longestArr, nums1, nums2, nums3);

//     const largestSet = new Set(arr);
//     const otherSet = new Set(otherArrays)

//     largestSet()
//     if (largestSet.has(num)) {
//         output.push(num)
//     }


// };


// const determineLongest = (nums1, nums2, nums3) => {
//     if (nums1.length > nums2.length && nums1.length > nums3.length) {
//         return nums1;
//     } else if (nums2.length > nums1.length && nums2.length > nums3.length) {
//         return nums2;
//     } else {
//         return nums3;
//     }
// }

// const determineOtherArrays = (array, nums1, nums2, nums3) => {
//     if (array === nums1) {
//         return [...nums2, ...nums3]
//     } else if (array === nums2) {
//         return [...nums1, ...nums3]
//     } else {
//         return [...nums1, ...nums3]
//     }
// }