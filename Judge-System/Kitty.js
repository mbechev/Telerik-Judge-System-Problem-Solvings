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
    "**@x*x*@x@@",
    "-8 -1 11 -1 -12 -5 -25 25 -37 -42 16 40 47 -5 2 -61 -22 -49 -22 -43 57 -21 -83 38 72 96 -32 -14 -98 59 -37 13 5 61 -54 -42 70 25 -12 25 -132 -42 -135 -82 -33 63 106 108 -121 -104 -150 30 -168 -152 192 144"
];

init(input)

let string = gets().split("");
let numbers = gets().split(" ").map(Number);
numbers.unshift(0);

let souls = 0; //@
let foods = 0; //*
let deadlocks = 0; //x
let jumps = 0

let kittyDeadlocked = false;
let num = 0;

for (let i = 0; i < numbers.length; i++) {
    let move = numbers[i];

    if (move > 0) {
        num += move;
        while (num > string.length - 1) {
            num -= string.length;
        }
    }
    if (move < 0) {
        num += move;
        while (num < 0) {
            num += string.length;
        }
    }

    if (string[num] === "@") {
        souls++;
        string[num] = '#';
    } else if (string[num] === "*") {
        foods++;
        string[num] = "#";
    } else if (string[num] === "x") {
        deadlocks++;
        if (num % 2 === 0) {
            if (souls > 0) {
                souls--;
            } else {
                kittyDeadlocked = true;
                break;
            }
        } else {
            if (foods > 0) {
                foods--;
            } else {
                kittyDeadlocked = true;
                break;
            }
        }
        string[num] = '#';
    }

    jumps++;
}


if (kittyDeadlocked) {
    print("You are deadlocked, you greedy kitty!");
    print(`Jumps before deadlock: ${jumps}`);
} else {
    print(`Coder souls collected: ${souls}`)
    print(`Food collected: ${foods}`)
    print(`Deadlocks: ${deadlocks}`)
}