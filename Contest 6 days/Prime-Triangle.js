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
let arrayOfPrimes = [];
for (let i = 1; i <= num; i++) {
    let devider = Number(Math.sqrt(i));
    let isValid = true;
    for (let j = 2; j <= devider; j++) {
        if (i % j === 0) {
            isValid = false;
        }
    }
    if (isValid) {
        arrayOfPrimes.push(i);
    }
}

for (let i = 0; i < arrayOfPrimes.length; i++) {
    let arr = [];
    for (let j = 1; j <= arrayOfPrimes[i]; j++) {
        let isPrime = arrayOfPrimes.includes(j)
        if (isPrime) {
            arr.push(1)
        } else {
            arr.push(0)
        }
    }
    print(arr.join(""))
}