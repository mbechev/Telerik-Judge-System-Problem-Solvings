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
    "5",
    "11",
    "22",
    "11",
    "22",
    "11",
];

init(input);

let num = +gets();
let merge = [];
let squash = [];

let arr = gets()
let number = arr[1];
for (let i = 0; i < num - 1; i++) {
    //============================= MERGING
    let temp = gets();
    let x = number + temp[0];
    merge.push(x);
    number = temp[1];
    //============================== SQUASHING
    let fristIndex = arr[0];
    let sum = (+arr[1] + +temp[0])%10;
    sum.toString();
    let lastIndex = temp[1];
    squash.push(fristIndex + sum + lastIndex);
    arr = temp;
}
print(merge.join(" ")); // 22 33 44 
print(squash.join(" ")) // 143 264 385