
function waterArea(heights) {
    if (heights.length === 0) return 0;
  
    let left = 0;
    let right = heights.length - 1;
    let leftMax = heights[left];
    let rightMax = heights[right];


    let maxWater = 0;

    while (left < right) {
        if (heights[left] < heights[right]) {
            left++;
            leftMax = Math.max(heights[left], leftMax);
            maxWater += leftMax - heights[left]
        } else {
            right--;
            rightMax = Math.max(heights[right], rightMax);
            maxWater += rightMax - heights[right]
        }
    };

    return maxWater;
}

// heights = [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]

// 48

// iterate with two pointers

