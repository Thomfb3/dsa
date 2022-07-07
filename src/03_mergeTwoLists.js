/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */

const mergeTwoLists = (l1, l2) => {
    let prehead = new ListNode(-1);
    let prev = prehead;
    
    while(l1 && l2) {
        if(l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        };
        prev = prev.next;
    };

    prev.next = l1 ? l1 : l2;

    return prehead.next
};

// Runtime: 76 ms, faster than 75.31% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 44 MB, less than 82.84% of JavaScript online submissions for Merge Two Sorted List