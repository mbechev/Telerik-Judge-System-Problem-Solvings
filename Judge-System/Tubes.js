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
    "3",
    "6",
    "100",
    "200",
    "300",
];
init(input)


// Colleague refactoring
let n = +gets();
let tubesWeNeed = +gets();
let allTubes = [];

for (let count = 0; count < n; count++) {
    allTubes.push(+gets());
}
let maxTubeSize = Math.max(...allTubes); // Get the max value from array of tube sizes

let start = 1;
let end = maxTubeSize;
let bestSolution = Math.floor((start + end) / 2); // middle

let result = 0;

while (start <= end) { // Because we search for maximum size we don't break the loop, just wait to be equal 
    let newTubesCount = 0;

    allTubes.forEach((tube) => {
        let tubesCutFromBigTube = Math.floor(tube / bestSolution);
        newTubesCount += tubesCutFromBigTube;
    });

    if (newTubesCount < tubesWeNeed) {
        end = bestSolution - 1; // (- 1) =>  not get the middle again
    } else if (tubesWeNeed <= newTubesCount) {
        start = bestSolution + 1; // (+ 1) => not get the middle again
        result = bestSolution;

        //If here we put "break" on the first test we will get 75 as a result not 100 
    }
    bestSolution = Math.floor((end + start) / 2);
}
print(result);





// let tubes = +gets();
// let fighters = +gets();
// let result = 0;
// let arrayOfTubes = Array.from({
//         length: tubes
//     })
//     .map((_, index, arr) => arr[index] = +gets());

// let maxTube = Math.max(...arrayOfTubes);

// let left = 1;
// let right = maxTube;
// let middle = Math.floor((left + right) / 2);

// while (left <= right) {
//     let tempResult = 0;
//     for (let j = 0; j < arrayOfTubes.length; j++) {
//         tempResult += Math.floor(arrayOfTubes[j] / middle);
//     }

//     if (tempResult < fighters) {
//         right = middle - 1;
//     } else if (tempResult >= fighters) {
//         left = middle + 1;
//         result = middle;
//     }
//     middle = Math.floor((left + right) / 2);
// }
// print(result)



//Slow

// for (let i = maxTube; i >= 1; i--) {
//     let tempResult = 0;

//     for (let j = 0; j < arrayOfTubes.length; j++) {
//         tempResult += Math.floor(arrayOfTubes[j] / i);
//     }
//     if (tempResult >= fighters) {
//         result = i;
//         break;
//     }
// }
// print(result)