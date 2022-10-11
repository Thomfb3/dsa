// /**
//  * @param {number} n
//  * @return {string[][]}
//  */


const solveNQueens = (n) => {
    const res = [];
    if (n === 1 || n >= 4) dfs(res, [], n, 0);
    return res;
}

const dfs = (res, points, n, idx) => {
    for (let i = idx; i < n; i++) {
        if (points.length !== i) return;

        for (let j = 0; j < n; j++) {
            if (isValid(points, [i, j])) {
                points.push([i, j]);
                dfs(res, points, n, i + 1);
                if (points.length === n) res.push(buildResult(points));
                points.pop();
            }
        }
    }
};

const buildResult = (points) => {
    const res = [];
    const n = points.length;

    for (let i = 0; i < n; i++) {
        res[i] = '';
        for (let j = 0; j < n; j++) {
            res[i] += (points[i][1] === j ? 'Q' :'.');
        }
    }
    return res;
};

const isValid = (oldPoints, newPoint) => {
    const len = oldPoints.length;

    for (let i = 0; i < len; i++) {
        if (oldPoints[i][0] === newPoint[0] || oldPoints[i][1] === newPoint[1]) return false;
        if (Math.abs((oldPoints[i][0] - newPoint[0]) / (oldPoints[i][1] - newPoint[1])) === 1) return false;
    }
    return true;
};