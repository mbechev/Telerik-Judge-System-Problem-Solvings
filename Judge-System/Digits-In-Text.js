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
    ""
];

init(input)

let string = gets().split("");

let sum = 0;
let isTrue = true;

string.forEach(element => {
    let number = +element;
    if (!isNaN(number)) {
        sum += number;
        isTrue = false;
    }
});

if (isTrue) {
    print(-1);
} else {
    print(sum);
}

// 9/10  CASE 4 IS SHIT