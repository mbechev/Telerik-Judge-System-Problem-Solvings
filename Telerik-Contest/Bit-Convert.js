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
    "28,4,3,7"
];

init(input)

let inputArray = gets().split(",").map(Number);

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

let resultStr = "";
for (let i = 0; i < inputArray.length; i++) {
    let tempStr = '';
    let binaryNum = pad(inputArray[i].toString(2), 8).split("");

    if (i % 2 === 0 || i === 0) {
        binaryNum.forEach((el, index) => {
            if (index % 2 !== 0) {
                tempStr += el;
            }
        })
    } else {
        binaryNum.forEach((el, index) => {
            if (index % 2 === 0 || index === 0) {
                tempStr += el;
            }
        })
    }
    resultStr += tempStr;
}
print(resultStr);