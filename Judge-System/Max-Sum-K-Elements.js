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
    "8",
    "3",
    "3",
    "2",
    "3",
    "-2",
    "5",
    "4",
    "2",
    "7",
];

init(input);
let N = +gets();
let K = +gets();
let array = [];
for (let i = 0 ; i < N ; i++){
    array[i] = +gets(); 
}
array.sort((a, b)=>  {return b - a});
let sum = 0;
for (let i = 0 ; i < K ; i++){
    sum += array[i]
}
print(sum)