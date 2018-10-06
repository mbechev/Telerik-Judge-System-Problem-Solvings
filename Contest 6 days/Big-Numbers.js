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
    "3 4",
    "8 3 3",
    "6 2 4 2",
];
init(input)

let sizes = gets().split(" ").map(Number);
let firstArray = gets().split(" ").map(Number);
let secondArray= gets().split(" ").map(Number);

let biggerLength = sizes[0] > sizes[1] ? sizes[0] : sizes[1];
let newArr = [];
let left = 0;
let sum = 0;

for (let i = 0; i < biggerLength; i++) {
    sum = (firstArray[i] || 0) + (secondArray[i] || 0) + left;
    newArr.push(sum % 10);
    left = sum > 9 ? 1 : 0;
}
print(newArr.join(" "))