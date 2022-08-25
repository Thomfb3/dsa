// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */


// const detectCycle = (head) => {
//     if (!head) return null;
    
//     const map = new Map();
//     let cur = head;
//     let position = 0;
    
//     while(true) {
//         if (!cur.next) {
//             position = -1;
//             break;
//         } 
//         if (map.get(cur) !== undefined) {
//             break;
//         }
//         map.set(cur, position);
//         cur = cur.next;
//         position++;
//     }
    
//     return position === -1 ? null : cur;  
// };


var detectCycle = function(head) {
    var fast = head, slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            break;
        }
    }
    
    if (!fast || !fast.next) {
        return null;
    }

    while(head != slow) {
        head = head.next;
        slow = slow.next;
    }
    
    return slow;
};