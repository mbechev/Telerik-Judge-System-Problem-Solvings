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
    "set 2",
    "print",
    "front-add 1",
    "print",
    "back-add 2",
    "print",
    "front-remove",
    "print",
    "set 4",
    "print",
    "print",
    "front-add 1",
    "print",
    "back-add 3",
    "print",
    "reverse",
    "print",
    "end",
];


init(input)

let num = '';

while (true) {
    let input = gets();
    if (input === 'end') {
        break;
    } else {
        input = input.split(" ");

        if (input[0] === 'set') {
            num = input[1];
        }
        if (input[0] === 'front-add') {
            num = input[1] + num;
        }
        if (input[0] === 'front-remove') {
            num = num.slice(1);
        }
        if (input[0] === 'back-add') {
            num = num + input[1]
        }
        if (input[0] === 'back-remove') {
            num = num.slice(0, num.length - 1);
        }
        if (input[0] === 'reverse') {
            num = num.split("");
            num.reverse();
            num = num.join("");
        }
        if (input[0] === 'print') {
            print(num);
        }
    }
}