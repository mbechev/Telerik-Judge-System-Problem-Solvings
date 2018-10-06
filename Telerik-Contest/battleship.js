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
    "2 2",
    "0 1",
    "1 1",
    "1 0",
    "1 1",
    "P1 1 1",
    "P2 0 1",
    "P1 0 0",
    "P2 1 1",
    "P1 1 1",
    "P2 1 0",
    "END",
];

init(input);

let boardSize = gets().split(" ").map(Number)[0];
let p1board = [];
let p2board = []

for (let i = 0; i < boardSize * 2; i++) {
    if (i < boardSize) {
        p1board.push(gets().split(' ').map(Number));
    } else {
        p2board.unshift(gets().split(' ').map(Number));
    }
}
let makeMove = function (field, row, col) {
    if (field[row][col] === 0) {
        print("Missed")
        field[row][col] = 'x'
    } else if (field[row][col] === 'x') {
        print("Try again!")
    } else {
        print("Booom")
        field[row][col] = 'x'
    }
}

while (true) {
    let commands = gets();
    if (commands === "END") {
        break;
    }
    commands = commands.split(' ');
    let player = commands[0];
    let row = +commands[1];
    let col = +commands[2];

    if (player === "P1") {
        makeMove(p2board, row, col)

    } else {
        makeMove(p1board, row, col)
    }
}
let result = function (field) {
    return field.reduce((acc, element) => {
        acc += element.filter((el) => el === 1).length
        return acc
    }, 0)
}

print(`${result(p1board)}:${result(p2board)}`)