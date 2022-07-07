// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const removeDuplicatesFromLinkedList = (linkedList) => {
    let cur = linkedList;

    while (cur) {
        let next = cur.next;
        while (next && cur.value === next.value) {
            next = next.next;
        };
        cur.next = next;
        cur = next;
    };
    return linkedList;
};
