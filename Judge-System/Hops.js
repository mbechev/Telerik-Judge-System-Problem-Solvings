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
    
];

init(input);
let array = gets().split(", ").map(Number);
let numbersOfDirection = +gets();
let tempSum = 0;
let totalSum = Number.MIN_SAFE_INTEGER;

let i = 0;
for (let j = 0; j < numbersOfDirection; j++) {

    let jumpsInput = gets().split(", ").map(Number);
    let exactJump = 0;
    tempSum = array[exactJump];

    while (true) {
        if (i > jumpsInput.length - 1) {
            i = 0;
        }

        exactJump += jumpsInput[i];

        if (array[exactJump] === undefined || exactJump === 0 ) {
            break;
        }
        tempSum += array[exactJump];
        i++;
    }

    if (tempSum > totalSum) {
        totalSum = tempSum;
    }
}
print(totalSum);