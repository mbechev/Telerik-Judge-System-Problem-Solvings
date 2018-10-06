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
init(input)

let num = +gets();
let numbers = [];
for (let i = 0; i < num; i++) {
    numbers[i] = +gets();
}

let hexNum = '';
numbers.map((el) => {
    hexNum += el.toString(16)
        .toUpperCase();
});
hexNum = hexNum.split('');

let count = 1;
let max = 0;
let times = 1;

hexNum.forEach((element, index) => {
    if (element === hexNum[index + 1]) {
        count++;
    } else if (element !== hexNum[index + 1]) {
        if (max < count) {
            max = count;
            times = 1;
        } else if (max === count) {
            times++;
        }
        count = 1;
    }
});

print(`${max} ${times}`);



