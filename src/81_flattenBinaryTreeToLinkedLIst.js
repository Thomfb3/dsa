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
//  * @return {void} Do not return anything, modify root in-place instead.
//  */

const preOrderTraversal = (root, acc = []) => {
    if (root) {
        acc.push(root)
        if (root.left) preOrderTraversal(root.left, acc);
        if (root.right) preOrderTraversal(root.right, acc); 
    }
    return acc;
}


var flatten = function(root) {
    if (!root) return null;
    let nodes = preOrderTraversal(root);
    
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].left = null;
        nodes[i].right = nodes[i + 1]
    }
    
    return nodes[0];
};