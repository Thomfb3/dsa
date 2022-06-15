
const invertBinaryTree = (tree) => {
    if (!tree) return;

    [tree.left, tree.right] = [tree.right, tree.left];

    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);

    return tree;
};