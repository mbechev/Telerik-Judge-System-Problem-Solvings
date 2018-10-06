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
    "1334",
    "0"

];

init(input);

let x = +gets();
let y = +gets();
let zero = x == 0 && y == 0; //0
let first = x >= 0 && x <= 2000000000001337 && y >= 0 && y <= 2000000000001337; //1
let second = x <= 0 && x >= -2000000000001337 && y >= 0 && y <= 2000000000001337; //2
let third = x <= 0 && x >= -2000000000001337 && y <= 0 && y >= -2000000000001337; //3
let fourth = x >= 0 && x <= 2000000000001337 && y <= 0 && y >= -2000000000001337; //4
let five = x == 0 && y >= -2000000000001337 && y <= 2000000000001337; //5
let six = y == 0 && x >= -2000000000001337 && x <= 2000000000001337; //6

if (zero) {
    print(0);
} else if (five) {
    print(5)
} else if (six) {
    print(6)
} else if (first) {
    print(1)
} else if (second) {
    print(2)
} else if (third) {
    print(3)
} else if (fourth) {
    print(4)
}