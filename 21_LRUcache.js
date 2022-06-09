// /**
//  * @param {number} capacity
//  */

const LRUCache = function(capacity) {
    // capacity is the max size of our cache/list
    this.capacity = capacity;
    // hash map 
    this.map = new Map();
    // initializing doubly linked list
    this.head = {};
    this.tail = {}
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

// /** 
//  * @param {number} key
//  * @return {number}
//  */

LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        let c = this.map.get(key);

        // uncouple node from dll
        c.next.prev = c.prev;
        c.prev.next = c.next;

        // move to the front of dll
        this._putAtFront(c);
        return c.value;
    } else {
        return -1;
    };
};


// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */

LRUCache.prototype.put = function(key, value) {
    // if it's in dll than it .get() will move item the font
    if (this.get(key) !== -1) {
        // update node value
        this.head.next.value = value;
    } else {
        if (this.map.size === this.capacity) {
            //if list is at capacity remove LRU
            // delete from map
            this.map.delete(this.tail.prev.key);
            // remove from dll
            this.tail.prev = this.tail.prev.prev;
            this.tail.prev.next = this.tail;
        };

        let newNode = {
            key,
            value,
        };

        // add new node key to map
        this.map.set(key, newNode);
        // add new node to front of dll
        this._putAtFront(newNode);
    };
};

LRUCache.prototype._putAtFront = function(node) {
    // move node to the front of dll
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
};


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */




//  ["LRUCache","put","put","get","put","get","put","get","get","get"]
//  [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]

// [null,null,null,1,null,-1,null,-1,3,4]


//let obj = new LRUCache(5);
