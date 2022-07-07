// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */

const levelOrder = (root) => {
    if(!root) return [];

    let result = [];
    let queue = [root];

    while(queue.length > 0) {
        let subarr = [];
        let n = queue.length;
        for(let i = 0; i < n; i++) {
            let node = queue.pop();
            subarr.push(node.val);

            if(node.left) queue.unshift(node.left);
            if(node.right) queue.unshift(node.right);
        };

        result.push(subarr);
    };
    return result;
};



// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

    //      3
    // 9        20
    //        15  7

// queue [root] -> [root.left, root.right] -> [root.right.left, root.right.right]
// node = root -> root.left -> root.right -> root.right.left -> root.right.right
//subarr =  [3] -> [] -> [9,20] ->
//result = [] -> [[3]] -> [[3], [9,20]] -> [[3], [9,20], [15, 7]]



