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
    "4",
    "10,20,30,40,50",
    "2 forward 1",
    "2 backwards 1",
    "3 forward 2",
    "3 backwards 2",
    "exit",
];

init(input);
let stratPosition = +gets(); //0
let array = gets().split(',').map(Number);
let sumFor = 0;
let sumBack = 0;
while (true) {
    let instructions = gets();
    if (instructions === 'exit') {
        break;
    };
    instructions = instructions.split(' ');
    let times = +instructions[0];
    let dir = instructions[1];
    let size = +instructions[2];

    for (let i = 0; i < times; i++) {
        if (dir === 'forward') {
            stratPosition = (stratPosition + size) % array.length;
            sumFor += array[stratPosition];
        } else {
            let index = (stratPosition - size) % array.length ;
            if (index < 0) {
                stratPosition = array.length + index;
            } else {
                stratPosition = index;
            }
            sumBack += array[stratPosition];
        }
    }
}
print(`Forward: ${sumFor}`)
print(`Backwards: ${sumBack}`)