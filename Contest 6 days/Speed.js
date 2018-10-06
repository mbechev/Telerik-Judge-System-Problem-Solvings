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
    "11",
    "1500",
    "4",
    "6",
    "5",
    "3",
    "3",
    "9",
    "100",
    "2",
    "3",
    "1",
];

init(input)


let numbersOfCars = +gets()
let carsSpeedArray = [];
for (let i = 0; i < numbersOfCars; i++) {
    carsSpeedArray.push(+gets());
}

let count = 1;
let max = 1;
let sum = 0;
let total = 0;

for (let i = 1; i < carsSpeedArray.length; i++) {
    sum = carsSpeedArray[i - 1];
    let j = i;
    while (carsSpeedArray[j] > carsSpeedArray[i - 1]) {
        sum += carsSpeedArray[j];
        count++;
        j++;
    }

    if (count > max) {
        max = count;
        total = sum;
    } else if (count === max) {
        if (sum > total) {
            total = sum;
        }
    }
    count = 1;
    sum = 0;
}

print(total)