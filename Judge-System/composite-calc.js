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

const input = ['20'];
init(input);

const n = +gets();

for (let i = n + 1; i <= n + 10; i += 1) {
    print(i);
}
