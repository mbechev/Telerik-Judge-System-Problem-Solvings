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
    "5 4 6 3"
];
init(input)

let arr = gets().split(" ").map(Number);
let descending = true;

for (let i = 1; i < arr.length; i++) {

    if (arr[i - 1] < arr[i]) {
        descending = false;
    } else {
        descending = true;
        break;
    }
};
if (!descending) {
    print("Ascending")
} else {
    let isValid = false;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            isValid = true;
        } else {
            isValid = false;
            break;
        }
    }

    if (isValid) {
        print("Descending");
    } else {
        print("Mixed");
    }
};