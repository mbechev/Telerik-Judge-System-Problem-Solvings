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
    "integer",
    "5.2"
];
init(input);

let word = gets();
switch (word) {

    case "real":
        print((+gets() + 1).toFixed(2))
        break;

    case "integer":
        print(1 + (+gets()))
        break;
    case 'text':
        print(gets() + '*')
}