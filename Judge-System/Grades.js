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
    "6", 
    "10 9 9 6 7 2"
];

init(input)

let numbersOfGrades = +gets();
let grades = gets().split(" ")
    .map(Number)
    .sort((a, b) => a - b);
grades.shift();
grades.pop();

let count = grades.reduce((acc, el) => {
    acc += el;
    return acc
}, 0);
print(Math.round(count / grades.length));