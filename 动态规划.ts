let minDist = 0;

// minDistBacktracing(0, 0, 0, w, n)

function minDistBacktracing(i: number, j: number, dist: number, w: Array<Array<number>>, n: number) {
    if (i === n && j === n) {
        if (dist < minDist) minDist = dist;
        return;
    } 

    if (i < n) {
        minDistBacktracing(i + 1, j, dist + w[i][j], w, n);
    }

    if (j < n) {
        minDistBacktracing(i, j + 1, dist + w[i][j], w, n);
    }
}


// 状态转移表
function minDistBacktracing2(matrix: Array<Array<number>>, n: number) {
    const states = new Array(n).fill(new Array<number>[]);
    let sum = 0;
    for (let i = 0; i < n; ++i) {
        sum += matrix[0][i];
        states[0][i] = sum;
    }

    sum = 0
    for (let i = 0; i < n; ++i) {
        sum += matrix[i][0];
        states[i][0] = sum;
    }

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            states[i][j] = matrix[i][j] + Math.min(states[i][j - 1], states[i - 1][j]);
        }
    }
    return states[n-1][n-1];
}


// 状态转移方程
const matrix = [[], [], [], []];
const n = 4;
const mem = new Array(4).fill([]);

function minDistBacktracing3(i: number, j: number) {
    if (i === 0 && j === 0) return matrix[0][0];
    if (mem[i][j] !== undefined) return mem[i][j];
    const minL = minDistBacktracing3(i, j  - 1);
    const minT = minDistBacktracing3[i - 1][j];

    const cur = matrix[i][j] + Math.min(minL, minT);
    mem[i][j] = cur;
    return cur;
}

