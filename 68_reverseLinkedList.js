// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = head;
    let cur = head.next;
    let next = head.next ? head.next.next : null;
    head.next = null;

    while (cur) {
        next = cur.next
        cur.next = prev;
        prev = cur
        cur = next;
    }

    return prev;
}


// 0 -> 1 -> 2 -> 3 -> 4

// 4 -> 3 -> 2 -> 1 -> 0