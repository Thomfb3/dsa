// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */


var numIslands = (grid) => {
    let counter = 0;

    // depth first search
    const dfs = (i, j) => {
        if (
            i >= 0 &&
            j >= 0 &&
            i < grid.length &&
            j < grid[i].length &&
            grid[i][j] === '1'
        ) {
            grid[i][j] = "0";
            dfs(i + 1, j);
            dfs(i, j + 1);
            dfs(i - 1, j);
            dfs(i, j - 1);
        }
    };

    //iterate though the grid
    //if the grid[i][j] === 1 -> counter++ and dfs

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                counter++;
                dfs(i, j);
            }
        }
    }

    return counter;
};


// Given an m x n 2D binary grid 'grid' which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.



// Input: grid = [
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"]
// ]
// Output: 1


// Input: grid = [
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"]
// ]
// Output: 3