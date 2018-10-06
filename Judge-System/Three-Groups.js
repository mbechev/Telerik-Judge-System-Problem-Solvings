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

const input = ['1 2 3 4 5 6 7'];

init(input);

// Solution

const newArr = gets().split(' ');
let zeroRem = '';


let oneRem = '';


let twoRem = '';

newArr.forEach((element) => {
    if (+element % 3 === 0) {
        zeroRem += element + ' ';
    } else if (+element % 3 === 1) {
        oneRem += element + ' ';
    } else if (+element % 3 === 2) {
        twoRem += element + ' ';
    }
});
print(zeroRem);
print(oneRem);
print(twoRem);
