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
    "3 4"
];

init(input);
let entryParam = gets().split(" ").map(Number)
let rows = entryParam[0];
let cols = entryParam[1];
let matrix = [];
let startNum = 1;

//================================ MAKE THE MATRIX  
for (let i = 0; i < rows; i++) {
    let temp = [];
    for (let j = 0; j < cols; j++) {
        temp[j] = startNum
        startNum *= 2;
    }
    matrix.push(temp)
    startNum = matrix[i][0] * 2;
}

let sum = 1;
let curRow = 1;
let curCol = 1;
let rowChange = 1;
let colChange = 1;
if (rows === 1 || cols === 1) {
    print(sum)
} else {
    while (true) {
        sum += matrix[curRow][curCol];
        if (curRow === 0 && curCol === 0 ||
            curRow === rows - 1 && curCol === cols - 1 ||
            curRow === rows - 1 && curCol === 0 ||
            curRow === 0 && curCol === cols - 1) {
            print(sum);
            break;
        } else if (curRow === rows - 1) {
            rowChange = -1;
        } else if (curCol === cols - 1) {
            colChange = -1;
        } else if (curRow === 0) {
            rowChange = 1;
        } else if (curCol === 0) {
            colChange = 1;
        }

        curRow += rowChange;
        curCol += colChange;
    }
}