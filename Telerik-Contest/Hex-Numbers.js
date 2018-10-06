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
    "1",
    "26",
    "221",
];
const input2 = [
    "7",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
];
init(input);

let num = +gets();
let numbers = [];
for (let i = 0; i < num; i++) {
    numbers[i] = +gets();
}

for (let i = 0; i < num; i++) {
    numbers[i] = numbers[i].toString(16).toUpperCase();
}

let hexaNum = numbers.join('').toString();

let count = 0;
let temp = 1;
let result = 1;

for (let i = 1; i <= hexaNum.length; i++) {
    if (hexaNum[i - 1] === hexaNum[i]) {
        temp++;
    } else if (hexaNum[i - 1] !== hexaNum[i]) {
        if (temp > count) {
            count = temp;
            result = 1;
        } else if (count === temp) {
            result++;
        }
        temp = 1;
    }
}

print(`${count} ${result}`)