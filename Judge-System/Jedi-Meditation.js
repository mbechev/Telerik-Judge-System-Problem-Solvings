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

const number = [
    "7",
    "P4 P2 P3 M1 K2 P1 K1 M2 M3",
];

init(number);

let numberOfJedi = +gets();
let jedi = gets().split(" ");

let padawans = jedi.filter((el) => el[0] === 'P'); // ["P4", "P2", "P3", "P1"]
let knightJedi = jedi.filter((el) => el[0] === 'K'); // ["K2", "K1"]
print(knightJedi)
let masterJedi = jedi.filter((el) => el[0] === "M"); // ["M1 M2 M3"]
print(masterJedi)
// let order = [...masterJedi, ...knightJedi, ...padawans]. join(" ");
// print(order)

//Complex

let order = [...masterJedi, ...knightJedi, ...padawans]. join(" ");
print(order)