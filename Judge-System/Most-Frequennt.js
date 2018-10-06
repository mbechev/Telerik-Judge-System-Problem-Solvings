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

const input = [];

init(input);

// Solution

const n = +gets();
const arr = [];
for (let i = 0; i < n; i++) {
    arr[i] = +gets();
}

let frequent = 1;
let mostFrequent = 0;
let result = 0;
for (let i = 0; i < arr.length; i++) {
    frequent = 1;

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            frequent += 1;
        }
    }
    if (frequent > mostFrequent) {
        mostFrequent = frequent;
        result = arr[i];
    }
}
print(`${result} (${mostFrequent} times)`);
