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
    "1,2,3,3,5"
];
init(input);

let inputArray = gets()
    .split(',')
    .map(Number)
    .sort((a, b) => a - b);
let compareArr = [];

for (let i = 0; i < inputArray.length; i++) {
    compareArr[i] = i + 1;
}

let newArray = inputArray.map((el, index) => {
    if (index !== inputArray - 1) {
        if (el === inputArray[index + 1]) {
            inputArray.splice(index, 1)
        }
    }
    return el
})

let arrayForMissingElements = [];

compareArr.forEach((element, index) => {
    let bool = newArray.includes(element);
    if (!bool) {
        arrayForMissingElements.push(element)
    }
});

print(arrayForMissingElements.join(','))