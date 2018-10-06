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
    "3"
];

init(input);

let n = +gets();
let array = [];

for (let i = 1; i <= n; i++) {
    if (i % 3 !== 0 && i % 7 !== 0) {
        array.push(i)
    }
}
print(array.join(" "))