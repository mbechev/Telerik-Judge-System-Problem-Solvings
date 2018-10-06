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

const input = ['5f4d3s2a1'];

init(input);

// Solution

const arr = gets()
.split('')
.reverse();

const sentence = arr.filter(myFunc)
.join('');

function myFunc(value) {
    const num = +value;
    if (isNaN(num)) {
        return value;
    }
}
print(sentence);
