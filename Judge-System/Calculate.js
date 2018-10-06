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
    "3",
    "2"
];
const input2 = [
    "4",
    "3"
]
init(input2)

let N = +gets();
let x = +gets();
let sum = 1;

let factorial = function (n) {
    if (n < -1) {
        return
    } else if (n === 0) {
        return 1
    }
    return (n * (factorial(n - 1)))
}

for (let i = 1; i <= N; i++) {
    sum += factorial(i) / x ** i;
}
print(sum.toFixed(5))