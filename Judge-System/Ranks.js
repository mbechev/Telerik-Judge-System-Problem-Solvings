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
    "0 -5 4 -11 1",
];
init(input)

let N = +gets();
let array = gets().split(" ").map(Number);
let newArr = [];

let count = 1;
let minNumber = Math.min.apply(Math, array)-1;
for (let i = 0; i < N; i++) {
    let index = array.indexOf(Math.max.apply(Math, array));
    newArr[index] = count;
    count++;
    array[index] =minNumber ;
}
print(newArr.join(" "))