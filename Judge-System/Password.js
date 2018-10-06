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
    "996655 99",
];

init(input);

let inputParam = gets().split(" ");
let number = +(inputParam[0].split("").reverse().join(""));
let k = +(inputParam[1]);

let left = Math.floor(number / k);
let leftFromMod = number % k;
let result = left + leftFromMod;
print(result)