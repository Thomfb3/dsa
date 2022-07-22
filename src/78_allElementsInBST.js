/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * @param {TreeNode} root1
//  * @param {TreeNode} root2
//  * @return {number[]}
//  */
const postorderTraverse = (root, acc = []) => { 
    if (root) {
        if (root.right) postorderTraverse(root.right, acc);
        acc.push(root.val)
        if (root.left) postorderTraverse(root.left, acc);
    }
    return acc
}

const getAllElements = (root1, root2) => {
    const result = [];
    const output1 = postorderTraverse(root1);
    const output2 = postorderTraverse(root2);

    while (output1.length || output2.length) {
        if (output1[output1.length - 1] <= output2[output2.length - 1] || !output2.length) {
            result.push(output1.pop());
        } else {
            result.push(output2.pop());
        }
    }
    return result;
};