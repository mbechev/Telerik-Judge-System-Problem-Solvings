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
    "510"
];
init(input)
let num = gets().split('').map(Number);
let getMax = function  (a, b ,c ){
    return Math.max(
        a+b+c,
        a+b*c,
        a*b+c,
        a*b*c
    )
}
print(getMax(num[0], num[1], num[2]))