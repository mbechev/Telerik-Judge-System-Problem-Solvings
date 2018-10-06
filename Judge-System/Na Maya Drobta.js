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
    "1 2"
];
init(input);

let inputNumbers = gets().split(" ").map(Number);
let firstNum = inputNumbers[0];
let secondNum = inputNumbers[1];

let GCD = (first, second) => {
    while (first != 0 && second != 0) {
        if (first > second)
            first %= second;
        else
            second %= first;
    }
    if (first == 0)
        return second;
    else
        return first;

};

let devisor = GCD(firstNum, secondNum);

devisor === 1 ? print(`${firstNum} ${secondNum}`) : print(`${firstNum/devisor} ${secondNum/devisor}`);