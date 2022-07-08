// const rotate = (nums, k) => {
//     if (nums.length < 2) return nums;
//     let temp = [];
//     let pivot = nums.length - (k % nums.length);
    
//     for (let i = pivot; i < nums.length; i++) {
//         temp.push(nums[i]);
//     };
    
//     for (let i = 0; i < pivot; i++) {
//         temp.push(nums[i]);
//     };
    
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = temp[i];
//     };
    
// };



const rotate = (nums, k) => {
    k = k % nums.length;
    reverseArrayElements(nums, 0, nums.length-1);
    reverseArrayElements(nums, 0, k-1);
    reverseArrayElements(nums, k, nums.length-1)


}

const reverseArrayElements = (array, start, end) => {
    while (start < end) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
}

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]



[5,6,7,1,2,3,4]



