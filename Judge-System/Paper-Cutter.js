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
    "1337"
];
init(input)

let number = +gets();
let sheetsArr = ["A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"]
let pieces = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]
let arr = [];

pieces.forEach((el, ind) => {
    if (number >= el) {
        number -= el;
        arr.push(sheetsArr[ind])
    }
})
// let newArr = sheetsArr.filter((element) => {
//     return arr.indexOf(element) === -1 ;

// })
let newArr = sheetsArr.filter((element) => {
    return !arr.includes(element);

})

.forEach((el) => {
    print(el)
})