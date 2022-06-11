// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}
  
function branchSums(root) {
    const sums = [];
    addBranches(root, 0, sums);
    return sums;
};
  
function addBranches(node, acc, sums) {
    if (!node) return;
    const newSum = acc + node.value;

    if(!node.left && !node.right) {
        sums.push(newSum);
        return;
    };

    addBranches(node.left, newSum, sums);
    addBranches(node.right, newSum, sums);
};
  