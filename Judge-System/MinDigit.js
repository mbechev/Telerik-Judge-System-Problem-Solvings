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
    "9000"
];
init(input)

let result = [];
let numbers = gets()
    .split("")
    .map(Number)
    .forEach((el) => {
        if (el !== 0) {
            result.push(el);
        }
    });
print(Math.min(...result));