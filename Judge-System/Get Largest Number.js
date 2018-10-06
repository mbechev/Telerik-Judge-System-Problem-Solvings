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
    "5 1 10"
];
init(input)

let array = gets().split(" ").map(Number);
let getMax = function  (param1, ...param2){
    return Math.max(param1, ...param2);
}
print(getMax(array[0], ...array))