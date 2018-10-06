let print;
let gets;

const init = function(input) {
    print = print || console.log;

    const gen = function* (inp) {
        for (let i = 0; i < inp.length; i++) {
            yield inp[i];
        }
    };

    const generator = gen(input);

    gets = gets || (() => generator.next().value);
};

const input = [10];

init(input);

// Solution

const inputLen = +gets();
const arr = [];
// Create array
for (let i = 0; i < inputLen; i++) {
    arr[i] = +gets();
}

let sum = 0;
let bigger = 0;

for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
        sum += arr[j];
        if (sum > bigger) {
            bigger = sum;
        }
    }
}
print(bigger);
