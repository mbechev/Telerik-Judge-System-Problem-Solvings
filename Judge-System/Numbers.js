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
    "94 106 4 5"
];

init(input)

//SoLuTiOn

let inputArr = gets().split(" ").map(Number);
let start = inputArr[0];
let end = inputArr[1];
let firstDev = inputArr[2];
let secondDev = inputArr[3];

let arr = [];
let count = 0;
for (let i = start; i <= end; i++) {
    let number = i.toString().split("").map(Number);
    for (let k = 0; k < number.length; k++) {
        arr.push(number[k]);
    }
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % firstDev === 0 || arr[i] % secondDev === 0) {
        continue;
    } else {
        count++;
    }
}
print(count)