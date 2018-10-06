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
    "5 2 3",
    "2 4",
    "1 3 5",
];
const input2 = [
    "2 2 2",
    "1 2",
    "1 2"
]
init(input2)

let inputNumbers = gets().split(" ").map(Number); // 5 2 3
let totalStudents = inputNumbers[0]; //5
let noPencilNumbers = inputNumbers[1]; //2
let withPencilNumbers = inputNumbers[2]; //3

let indexForNonePencil = gets().split(" ").map(Number); // 2 4
let indexForWithPencil = gets().split(" ").map(Number); // 1 3 5


let arrayOfStudents = [];
for (let i = 0; i < totalStudents; i++) {
    arrayOfStudents[i] = i + 1;
}

arrayOfStudents.forEach((el, index) => {
    indexForNonePencil.forEach((element) => {
        if (el === element) {
            arrayOfStudents[index] = "x";
        }
    })
})
print(arrayOfStudents)

let result = 0;
let length = arrayOfStudents.length;

if (arrayOfStudents[0] === "x" && arrayOfStudents[1] === "x") {
    result++;
}
if (arrayOfStudents[length - 2] === 'x' && arrayOfStudents[length - 1] === "x") {
    result++;
}
if (arrayOfStudents[length - 2] === 'v' && arrayOfStudents[length - 1] === "v") {
    result++;
}
if (arrayOfStudents[0] === "v" && arrayOfStudents[1] === "v") {
    result++;
}

print(result)