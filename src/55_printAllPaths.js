
const allPathsSourceTarget = (graph) => {
    const len = graph.length;
    let result = [];

    const dfs = (node, arr) => {
        if (node === len - 1) {
            result.push([...arr, node]);
            return;
        };

        for (let next of graph[node]) {
            dfs(next, [...arr, node])
        };
    };

    dfs(0, []);
    return result;
}