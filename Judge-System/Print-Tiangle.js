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
    "8"
];

init(input)
let number = +gets()

let iterator = number - 1;
let upperBody = "";

for (let i = 1; i <= (number * 2) - 1; i++) {
    if (i <= number) {
        for (let j = i; j <= i; j++) {
            upperBody += j + " ";
        }
        print(upperBody);
    } else {
        let lowerBody = "";
        for (let j = 1; j <= iterator; j++) {
            lowerBody += j + " ";
        }
        print(lowerBody)
        iterator--;
    }
}