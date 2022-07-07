/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

// /**
//  * @param {Node} head
//  * @return {Node}
//  */


var flatten = function(head) {
    if (!head) return head;

    let stack = [];
    let cur = head;

    while (cur) {
        if (cur.child) {
            if (cur.next) stack.push(cur.next);
            cur.next = cur.child;
            cur.next.prev = cur;
            cur.child = null;

        } else if (!cur.next && stack.length != 0) {
            cur.next = stack.pop();
            cur.next.prev = cur;
        }
        cur = cur.next;
    }

    return head;

};


// Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// Output: [1,2,3,7,8,11,12,9,10,4,5,6]
// Explanation: The multilevel linked list in the input is shown.
// After flattening the multilevel linked list it becomes: