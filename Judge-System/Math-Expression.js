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
    "4",
    "-125638.237",
    "234747.343286",
];

init(input);

let N = +gets();
let M = +gets();
let P = +gets();

let upperPart = (Math.pow(N, 2)) + (1 / (M * P)) + 1337;
let lowerPart = N - (128.523123123 * P);
let result = ((upperPart / lowerPart) + Math.sin(Math.trunc(M % 180))).toFixed(6);

print(result);