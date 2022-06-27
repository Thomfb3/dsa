// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findLoop(head) {
    let map = new Map();
    let cur = head;

    while (true) {
        if (map.has(cur)) {
            break;
        } else {
            map.set(cur, cur)
            cur = cur.next;
        };
    };

    return cur;
}



function findLoop2(head) {
    let slow = head.next;
    let fast = head.next.next;

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next.next;
    }

    slow = head;

    while (slow !== fast) {
        
    }
}