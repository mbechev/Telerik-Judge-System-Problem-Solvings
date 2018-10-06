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
    "8 30"

];

init(input);
let numbers = gets().split(" ");
let firstNum = numbers[0];
let secondNum = numbers[1];

let CommonDevisor = (first, second) => {
    let tempArr = [];

    let i = 2;
    while (i < Math.min(first, second)) {
        if (first % i === 0 && second % i === 0) {
            tempArr.push(i)
        }
        i++;
    }

    if (tempArr.length === 0) {
        return -1;
    }

    let newArr = [];
    for (let i = 0; i < tempArr.length; i++) {
        let devider = Number(Math.sqrt(tempArr[i]));
        let isValid = true;
        for (let j = 2; j <= devider; j++) {
            if (tempArr[i] % j === 0) {
                isValid = false;
            }
        }
        if (isValid) {
            newArr.push(tempArr[i]);
        }
    }

    return newArr.join(" ");
}

print(CommonDevisor(firstNum, secondNum));



