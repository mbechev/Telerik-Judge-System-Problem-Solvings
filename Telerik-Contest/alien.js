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
"test",
"el examen"
];

init(input);

let english = gets();
let spanish = gets();

let long = english.length > spanish.length ? english : spanish;

let letter;
let word ='';
for (let i = 0; i < long.length; i++) {
    if (english[i] === ' ' || spanish[i] === ' ') {
        letter = " ";
    } else if (english[i] === '-' || spanish[i] === '-') {
        letter = '-';
    } else {
        let charNum = Math.abs((english[i] || 'a').charCodeAt(0) - (spanish[i] || 'a').charCodeAt(0));
        letter = String.fromCharCode(charNum + 'a'.charCodeAt(0))
    }

    word += letter;
}
print(word)