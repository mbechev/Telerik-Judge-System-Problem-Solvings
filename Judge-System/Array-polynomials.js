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
    "3",
    "5 0 1",
    "7 4 -3",
];
init(input)

let size = +gets();
let firstArray = gets().split(" ")
.map(Number)
.reverse();
let secondArray = gets().split(" ")
.map(Number)
.reverse();

let newArr = [];
for (let i = 0 ; i < size ; i++){
    newArr[i]= firstArray[i]+secondArray[i];
}
newArr.reverse()
print(newArr.join(" "))
