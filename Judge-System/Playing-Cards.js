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

const input = ['8'];

init(input);

// Solution

const card = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'A', 'Q'];
const inputCard = gets();

if (card.includes(inputCard)) {  
    print(`yes ${inputCard}`);
} else {
    print(`no ${inputCard}`);
}
