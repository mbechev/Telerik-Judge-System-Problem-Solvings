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
    "88"
];
init(input)

let num = +gets();

let fact = function(n){
    if(n < -1){
        return
    } else if(n===0){
        return 1
    }
    return (n*fact(n-1))
}
print(fact(num))