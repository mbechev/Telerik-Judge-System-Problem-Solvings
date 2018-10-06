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
    "6 7 2",
    "0 0",
    "2 2",
    "-2 -2"
];

init(input)

let inputParam = gets().split(" ").map(Number);
let row = inputParam[0];
let col = inputParam[1];
let jumps = inputParam[2];

let startingPos = gets().split(" ").map(Number);
let r = startingPos[0];
let c = startingPos[1];

//============================= MAKE THE MATRIX
let matrix = [];
let counter = 1
for (let i = 0; i < row; i++) {
    let temp = [];
    for (let i = 0; i < col; i++) {
        temp[i] = counter;
        counter++;
    }
    matrix.push(temp)
}

let arrayOfJumps = [];
for (let i = 0; i < jumps; i++) {
    let inputJumps = gets().split(" ").map(Number);
    arrayOfJumps.push(inputJumps);
}

let sum = matrix[r][c];
matrix[r][c] = '*';
let posI = 0;
let posC = 0;
let jumpsCount = 0;

while (true) {
    r += arrayOfJumps[posI][posC];
    c += arrayOfJumps[posI][posC + 1];

    if (matrix[r] === undefined || r < 0 && matrix[c] === undefined || c < 0 || r >= row || c >= col) {
        print(`escaped ${sum}`);
        break;
    } else if (matrix[r][c] === '*') {
        print(`caught ${jumpsCount}`);
        break;
    }
    sum += matrix[r][c];
    jumpsCount++;
    matrix[r][c] = '*';

    posI++;
    if (posI === arrayOfJumps.length) {
        posI = 0;
        posC = 0;
    }
}