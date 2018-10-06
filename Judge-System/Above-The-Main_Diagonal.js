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

const input= [
    "4"
];

init(input);

let number = +gets();
let arr = [];

let startNum = 1
let sum =0;

for (let i = 0; i < number; i++) {
    let temp = [];
    for (let j = 0; j < number; j++) {
        temp[j] = startNum
        startNum*=2;
    }
    arr.push(temp)
    startNum = arr[i][0]*2;
    
    for (let c = i+1 ; c < number ; c++){
        sum+=arr[i][c]
    }
}
print(arr)
print(sum)

