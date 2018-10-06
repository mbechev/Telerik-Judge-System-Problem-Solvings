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
    "6",
    "1 1 2 5 2 6",
    "7",
    "6 5 1 6 2 5 6",

];

init(input);

let firstArrSize = +gets();
let firstArr = gets().split(" ").map(Number).sort((a, b) => a - b);

let secondArrSize = +gets();
let secondArr = gets().split(" ").map(Number).sort((a, b) => a - b);

// Function that remove repeated elements from array
let removeRepeated = (array) => {
    let temp = []
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] !== array[i]) {
            temp.push(array[i - 1])    // little hardcode, because of my fuckin skills
        }
    }
    temp.push(array[array.length-1])
    return temp;
}

let newFirstArray = removeRepeated(firstArr);
let newSecondArray = removeRepeated(secondArr);

// Check if all elements from the second array are exact same as first
let count = 0;
newFirstArray.forEach((element) => {
    newSecondArray.forEach((el) => {
        if (element === el) {
            count++;
        };
    })
});


// PRINT FUCKIN THINGS  
if (count === newFirstArray.length) {
    print(count);
} else { // print only elements from the first array that are not inclusive in second
    let temp = [];
    newFirstArray.forEach((element) => {
        let bool = true;
        newSecondArray.forEach((el) => {
            if (element === el) {
                bool = false;
            };
        })
        
        if (bool) {
            temp.push(element)
        }
    });

    print(temp.join(" "))
}