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

//Recursion
const preorderTraversal1 = (root, acc=[]) => {
    if(root) {
        acc.push(root.val);
        if(root.left) preorderTraversal(root.left, acc);
        if(root.right) preorderTraversal(root.right, acc);
    };
    return acc;
};


//Iterative
const preorderTraversal2 = (root) => {
    if(!root) return [];

    const stack = [];
    const acc = [];

    stack.push(root);

    while(stack.length > 0) {
        let curr = stack.pop();
        acc.push(curr.val)

        if (curr.right) stack.push(curr.right);
        if (curr.left) stack.push(curr.left);
    };
    return acc;
};






// Input: root = [1,null,2,3]
// Output: [1,2,3]

//recursive
const preorderTraversalRecursive = (root, acc=[]) => {
    if(root) {
        acc.push(root.val);

        if(root.left) preorderTraversal(root.left, acc);
        if(root.right) preorderTraversal(root.right, acc);
    };
    return acc;
};

//iterative 
const preorderTraversalIterative = (root) => {
    if(!root) return [];

    const stack = [];
    const acc = [];

    stack.push(root.val);

    while(stack.length > 0) {
        let curr = stack.pop();
        acc.push(curr.val);

        if(root.right) stack.push(root.right);
        if(root.left) stack.push(root.left);
    };

    return acc;
}

