
const solution = (maze, startRow, startCol, destRow, destCol) => {
    // Type your solution here 
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
    let start = [startRow, startCol];
    let destination = [destRow, destCol];
	const N = maze.length;
	const M = maze[0].length;
	const queue = [start];

	while (queue.length) {
		const len = queue.length;

		for (let i = 0; i < len; i++) {
			const [dRow, dCol] = destination;
			const [row, col] = queue.shift();

			if (row === dRow && col === dCol) return true;

			for (const [dx, dy] of directions) {
				let x = row + dx;
				let y = col + dy;

				// keep rolling in the current direction
				// x, y is within bounday and is not a wall
				while (x >= 0 && x < N && y >= 0 && y < M && maze[x][y] !== 1) {
					x += dx;
					y += dy;
				}

				// ball will be on the wall, take a step back
				x -= dx;
				y -= dy;

				// if invalid continue;
				if (maze[x][y] !== 0) continue;

				// continue rolling and mark as visited
				queue.push([x, y]);
				maze[x][y] = 2;
			}
		}
	}

	return false;
};
