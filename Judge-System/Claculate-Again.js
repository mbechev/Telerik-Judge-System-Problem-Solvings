

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
    "8",
    "3"
];
init(input)

let N = +gets();
let K = +gets();
let factorial = function (n) {
    if (n < -1) {
        return
    } else if (n === 0) {
        return 1
    }
    return (n * (factorial(n - 1)))
}

sum = factorial(N) / factorial(K);

print(sum)