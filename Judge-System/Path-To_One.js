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
const input = ["4663"];
init(input)

let number = +gets();
let count = 0;

while (number > 1) {

    if (number % 2 === 0) {
        number /= 2;
        count++;
    } else {
        if (((number - 1) / 2) % 2 === 0 || (number-1)/2===1){
            number--;
            number/=2;
            count+=2;
        }else if (((number + 1) / 2) % 2 === 0){
            number++;
            number/=2;
            count+=2
        }
    }
}
print(count)