const findClosestValueInBst = (tree, target) => {
    let cur = tree;
    let closest = tree.value;

    while(cur) {
        if (cur.value === target) return cur.value;
        closest = Math.abs(target - closest) < Math.abs(target - cur.value) 
          ? closest 
          : cur.value;
      
        cur = target < cur.value ? cur.left : cur.right
    };
    return closest;
};




// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  