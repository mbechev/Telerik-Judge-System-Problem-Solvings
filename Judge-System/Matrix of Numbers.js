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
    "3"
];

init(input);

let num = +gets()
let arr = [];
for (let i = 1; i <= num; i++) {
    arr.push(i)
}
print(arr.join(" "))
for (let i = 1; i < num; i++) {
    let newRow = arr.map((el) => el + 1);
    print(newRow.join(" "));
    arr=newRow;
}


