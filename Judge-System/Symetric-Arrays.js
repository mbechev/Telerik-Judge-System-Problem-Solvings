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
    "4",
    "1 2 3 2 1",
    "2 1",
    "1 2 2 1",
    "4",
];

init(input);

let times = +gets();

for (let i = 0; i < times; i++) {
    let array = gets().split(" ").map(Number); // 1 2 3 2 1 
    let isTrue = false;
    switch (array.length) {
        case 1:
            isTrue = true;
            break;
        case 2:
            if (array[0] === array[1]) {
                isTrue = true;
            } else {
                isTrue = false
            }
            break;
        case 3:
            if (array[0] === array[2]) {
                isTrue=true;
            } else {
                isTrue = false
            }
            break;
        case array.length % 2 == 0:
            for (let i = 0; i < array.length / 2; i++) {
                if (array[i] === array[array.length - 1 - i]) {
                    isTrue = true
                } else {
                    isTrue = false
                }
            }
            break;
        default:
            for (let i = 0; i < Math.floor(array.length / 2); i++) {
                if (array[i] === array[array.length - 1 - i]) {
                    isTrue = true
                } else {
                    isTrue = false
                }
            }
            break;
    }
    if (isTrue) {
        print("Yes");
    } else {
        print("No");
    }
}