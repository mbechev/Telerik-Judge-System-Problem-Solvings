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
    "J"
];

init(input);

let array = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
let sign = ["spades", "clubs", "hearts", "diamonds"]
let inputSign = gets();
let isNum = Number(inputSign);
let startPos = 0;

let printing = function (i) {
    print(`${i} of ${sign[0]}, ${i} of ${sign[1]}, ${i} of ${sign[2]}, ${i} of ${sign[3]}`)
}

if (isNum){
    startPos = array.indexOf(isNum);
}else{
    startPos = array.indexOf(inputSign);
}
for (let i = 0 ; i <= startPos ; i++){
    printing(array[i]);
}


























// let printing = function (i) {
//     print(`${i}, of ${sign[0]}, ${i}, of ${sign[1]}, ${i}, of ${sign[2]}, ${i}, of ${sign[3]}`)
// }


// if (isNum) {
//     for (let i = 2; i <= isNum; i++) {
//         printing(i);
//     }
// } else {
//     for (let i = 2; i <= 10; i++) {
//         printing(i);
//     }
// let star = inputSign.indexOf(over10)
// for (let i = 0 ; i <  ; i++){

// }

//         print(`${over10[i]}, of ${sign[0]}, ${over10[i]}, of ${sign[1]}, ${over10[i]}, of ${sign[2]}, ${over10[i]}, of ${sign[3]}`)

// }