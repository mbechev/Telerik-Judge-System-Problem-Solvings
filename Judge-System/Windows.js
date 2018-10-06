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
    "3 2",
    "10 20 1",
    "30 40 0",
    "20 20 1"

];

init(input);

let inputParam = gets().split(" ").map(Number);
let windowsCount = inputParam[0];
let price = inputParam[1];

let totalPrice = 0;
for (let i = 0; i < windowsCount; i++) {
    let inputSize = gets().split(" ").map(Number);
    if (inputSize[2] === 1) {
        totalPrice += (inputSize[0] * inputSize[1]) * price;
    }
}
print(totalPrice);