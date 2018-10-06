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

const input = [4];

init(input);

// Solution

const n = +gets();
const arr = [];
let sum = 0;

for (let i = 0; i < n; i++) {
    for (let c = 0; c < n; c++) {
        arr[i, c] = Math.pow(2, i+c);
    }
    for (let l = i; l < n; l++) {
        sum+=arr[i, l];
    }
}
//print(sum);

console.log(arr);
