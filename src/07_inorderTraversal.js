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
//  * @return {number[]}
//  */

//Recursive
const inorderTraversalRecursive = (root, acc = []) => {
    if (root) {
        if (root.left) inorderTraversal(root.left, acc);
        acc.push(root.val);
        if (root.right) inorderTraversal(root.right, acc);
    }
    return acc;
};

//Iterative
const inorderTraversal = (root) => {
    if (!root) return [];

    const stack = [];
    const acc = [];
    let curr = root;
 
    while (true) {

        while(curr) {
            stack.push(curr);
            curr = curr.left;
        };

        if (stack.length == 0) break;

        let lastCurr = stack.pop();
        acc.push(lastCurr.val);
        curr = lastCurr.right;
    };

    return acc;
}