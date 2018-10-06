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
    "5 10",
    "1000000010",
    "1111000011",
    "1000000000",
    "1100001000",
    "1000011100",
];
init(input);

let param = gets().split(" ").map(Number);
let rowsNum = param[0];
let colsNum = param[1];

let matrix = [];
for (let i = 0; i < rowsNum; i++) {
    let row = gets().split("").map(Number);
    matrix.push(row)
}

let count = 0;
let bestCount = 0;
let resultArr = [];

let sumStars = (row, col) => {
    if (row < 0 || col < 0 || row >= rowsNum || col >= colsNum) {
        return;
    }

    if (matrix[row][col] === "") {
        return
    }

    if (matrix[row][col] === 1) {
        count++;
        matrix[row][col] = "";
    }

    if (count > bestCount) {
        bestCount = count;
    } else {
        return
    }

    sumStars(row, col + 1);
    sumStars(row + 1, col);
    sumStars(row - 1, col);
    sumStars(row, col - 1);
}

for (let i = 0; i < rowsNum; i++) {
    for (let j = 0; j < colsNum; j++) {
        if (bestCount != 0) {
            resultArr.push(bestCount);
        }
        count = 0;
        bestCount = 0;
        sumStars(i, j)
    }
    if (i === rowsNum - 1 && bestCount != 0) {
        resultArr.push(bestCount);
    }
}
resultArr
    .sort((a, b) => b - a)
    .forEach(el => print(el));