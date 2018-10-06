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

const input = ['4 10'];

init(input);

let numbers = gets().split(' ').map(Number);
let first = numbers[0];
let second = numbers[1];


let GCD = function (first, second) {
    while (first != 0 && second != 0) {
        if (first > second)
            first %= second;
        else
            second %= first;
    }
    if (first == 0)
        return second;
    else
        return first;

}
let result = GCD(first, second);
print(result);