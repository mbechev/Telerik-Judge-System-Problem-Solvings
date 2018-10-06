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
    "0",
    "6",
    "1",
    "4",
    "16",
    "64",
    "256",
    "1024",

];

init(input);

let oneOrZero = gets();
let n = +gets();

for (let i = 0; i < n; i++) {
    let digit = +gets();
    let binary = digit.toString(2).split("");
    let count = 0;
    binary.forEach(element => {
        if (element === oneOrZero) {
            count++;
        }
    });
    print(count);
}