let print;
let gets;
const init = function (input) {
    print = print || console.log;

    const gen = function* (inp) {
        for (let i = 0; i < inp.length; i++) {
            yield inp[i];
        }
    };

    const generator = gen(input);

    gets = gets || (() => generator.next().value);
};
const input = [
    "5 6",
    "1 3 2 2 2 4",
    "3 3 3 2 4 4",
    "4 3 1 2 3 3",
    "4 3 1 3 3 1",
    "4 3 3 3 1 1",
];
init(input);

const param = gets().split(' ').map(Number);
const row = param[0];
const col = param[1];
const matrix = [];

for (let i = 0; i < row; i += 1) {
    const rowToPush = gets().split(' ').map(Number);
    matrix.push(rowToPush);
}

let count = 0;
let bestCount = 0;
let cell;

let findBiggestSum = (r, c) => {
    if (r < 0 || c < 0 || r >= row || c >= col) {
        return
    }

    if (cell === matrix[r][c]) {
        count++;
        matrix[r][c] = null
    } else {
        return
    }

    if (count > bestCount) {
        bestCount = count;
    } 

    findBiggestSum(r, c + 1);
    findBiggestSum(r + 1, c);
    findBiggestSum(r, c - 1);
    findBiggestSum(r - 1, c);
}


for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        count = 0
        cell = matrix[i][j];
        if (cell === null) {
            continue;
        }
        findBiggestSum(i, j)
    }
}
print(bestCount)


