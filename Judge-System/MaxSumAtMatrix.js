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

const number = [
    "3 3",
    "4 3 5",
    "2 6 4",
    "8 2 7"
];
const number2 = [
   "3 3",
   "4 3 5",
   "2 6 4",
   "8 2 7",
]

init(number2);

let size = gets().split(' ').map(Number);
let row = size[0];
let col = size[1];
let matrix = [];
for (let r = 0; r < row; r++) {
    let temp = []
    let element = gets().split(" ");

    for (let c = 0; c < col; c++) {
        temp[c] = +element[c];
    }
    matrix.push(temp)
}
let colShiftNum = col - 3; //2
let rowShiftNum = row - 3;


let sum = Number.MIN_SAFE_INTEGER;

let temp = 0;
for (let rowShift = 0; rowShift <= rowShiftNum; rowShift++) {

    for (let colShift = 0; colShift <= colShiftNum; colShift++) {

        for (let r = 0 + rowShift; r < 3 + rowShift; r++) {

            for (let c = 0 + colShift; c < 3 + colShift; c++) {
                temp += matrix[r][c]
            }
        }

        if (temp > sum) {
            sum = temp;
        }
        temp = 0;
    }
}
print(sum)