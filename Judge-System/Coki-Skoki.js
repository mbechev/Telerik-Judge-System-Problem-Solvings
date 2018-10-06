
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
    "6",
    "1 4 2 6 3 4",
];

init(input);
let numbersOfBuilding = +gets();
let height = gets().split(" ").map(Number);

let resultArr = [];
let count = 0;
let temp = 0;

for (let i = 0; i < numbersOfBuilding; i++) {
    if (i === numbersOfBuilding - 1) {
        resultArr.push(0);
        break;
    }
    temp = i;
    for (let j = i + 1; j < numbersOfBuilding; j++) {
        if (height[temp] < height[j]) {
            count++;
            temp = j;;
        }
    }

    resultArr.push(count);
    count = 0;
}
let maxCountJumps = Math.max.apply(null, resultArr)
print(maxCountJumps)
print(resultArr.join(' '))

//TLE on last 4 cases in judge
