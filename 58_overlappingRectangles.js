// Add your javascript here

const rect1 = {
    height: number,
    width: number,
    x: number,
    y: number
};

const rect2 = {
    height: number,
    width: number,
    x: number,
    y: number
};

// The rectangles don’t overlap if any of these are true:

// One left edge is to the right of the other right edge.
// One top edge is below the other bottom edge.

//r1.x + r1.width < r2.x
//r1.y + r1.height > r2.y
//r1.x > r2.x + r2.width 


function doesOverlap(r1, r2) {
    if (
        r2.x >= r1.x + r1.width ||
        r1.x >= r2.x + r2.width ||
        r1.y - r1.height >= r2.y ||
        r2.y - r2.height >= r1.y
    ) {
        return false;
    }
    return true;
}

// [2, 17, 6, 20]
// [3, 8, 6, 20]


var isRectangleOverlap1 = function (rec1, rec2) {
    const r1 = {
        height: rec1[3] - rec1[1],
        width: rec1[2] - rec1[0],
        x: rec1[0],
        y: rec1[3]
    }

    const r2 = {
        height: rec2[3] - rec2[1],
        width: rec2[2] - rec2[0],
        x: rec2[0],
        y: rec2[3]
    }
   return doesOverlap(r1, r2);
};


var isRectangleOverlap2 = function (rec1, rec2) {
    if (
        rec2[0] >= rec1[0] + (rec1[2] - rec1[0]) ||
        rec1[0] >= rec2[0] + (rec2[2] - rec2[0]) ||

        rec1[3] - (rec1[3] - rec1[1]) >= rec2[3] ||
        rec2[3] - (rec2[3] - rec2[1]) >= rec1[3]
    ) {
        return false;
    }
    return true;
};



/*

0      10
+-----+
|     |  12    16
|     |  +------+
|     |  |      |
+-----+  |      |
         |      |
         +------+

0,0   10,0
+-----+
|   6 |     16
|   +-|----+
|   | |    |
+-----+    |
    |      |
    +------+

0           10
+----------+
|   3  6   |
|   +--+   |
|   |  |   |
|   +--+   |
|          |
+----------+

    3    6
    +---+
0   |   |   10
+---|---|---+
|   |   |   |
+---|---|---+
    |   |
    +---+
*/


// [2, 17, 6, 20]
// [3, 8, 6, 20]


/*
            6,20
      +--+----+
      |  |    |
      +-------
         |    |
         +----+
        2,17
*/
