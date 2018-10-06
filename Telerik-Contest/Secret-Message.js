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
    "4{a}2{xz}"
];

init(input)

const encoded = [...gets()];
let decoded = '';
let repeat = 0;
const previousStack = [];
encoded.forEach(char => {
    if (char === '{') {
        previousStack.push({
            decoded,
            repeat
        });

        decoded = '';
        repeat = 0;
    } else if (char === '}') {
        const previous = previousStack.pop();
        decoded = previous.decoded + decoded.repeat(previous.repeat);
    } else if (!isNaN(char)) {
        repeat = repeat * 10 + (+char);
    } else {
        decoded += char;
    }
});

print(decoded);