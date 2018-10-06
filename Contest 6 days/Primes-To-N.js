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
    "10"
];
init(input)


let num = +gets();

let tempArr = [2, 3, 4, 9, 11, 13]
let newArr = [];
for (let i = 0; i < tempArr.length; i++) {
    let devider = Number(Math.sqrt(tempArr[i]));
    let isValid = true;
    for (let j = 2; j <= devider; j++) {
        if (tempArr[i] % j === 0) {
            isValid = false;
        }
    }
    if (isValid) {
        newArr.push(tempArr[i]);
    }
}
print(newArr.join(" "));