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
    "2",
    "1 1",
];
init(input);

let size = +gets();
let inputArray = gets().split(" ").map(Number);
let result = [];
let num = 0;

let loop = false;
let index = 0;

while (0 <= index && index < inputArray.length) {
    if (result.includes(index)) {
        loop = true;
        num = result.indexOf(index);
        break;
    }

    result.push(index)
    index = inputArray[index];
}

if (loop) {
    if (size === 2) {
        result[num - 1] = result[num - 1] + '(' + result[num] + ')';
        print(result[0])
    } else {
        result[num - 1] = result[num - 1] + '(' + result[num];
        result[result.length - 1] = result[result.length - 1] + ')';
        result.splice(num, 1);
        print(result.join(' '))
    }
} else {
    print(result.join(" "));
}