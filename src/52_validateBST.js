// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

const validateBst = (tree, minValue = -Infinity, maxValue = Infinity) => {
    if (!tree) return true;
    if (tree.value < minValue || tree.value >= maxValue) return false;
//left
    const leftIsValid = validateBst(tree.left, minValue, tree.value);
//right
    return leftIsValid && validateBst(tree.right, tree.value, maxValue);
}
  
