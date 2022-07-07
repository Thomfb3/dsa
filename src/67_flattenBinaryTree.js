// This is the class of the input root. Do not edit it.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const flattenBinaryTree = (root) => {
    let treeNodes = inorderTraversal(root, []);
    treeNodes[0].left = null;
    if (treeNodes.length < 2) {
        treeNodes[0].right = null;
        return treeNodes[0];
    };
    treeNodes[0].right = treeNodes[1];

    for (let i = 1; i < treeNodes.length - 1; i++) {
        treeNodes[i].left = treeNodes[i - 1];
        treeNodes[i].right = treeNodes[i + 1];
    };

    treeNodes[treeNodes.length - 1].left = treeNodes[treeNodes.length - 2];
    treeNodes[treeNodes.length - 1].right = null;

    return treeNodes[0];
}


const inorderTraversal = (root, acc = []) => {
    if (root) {
        inorderTraversal(root.left, acc)
        acc.push(root);
        inorderTraversal(root.right, acc)
    }
    return acc;
}

