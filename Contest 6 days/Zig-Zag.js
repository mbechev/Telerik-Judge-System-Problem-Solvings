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
    "2700 5400"
];
init(input)
let sizeMatrix = gets().split(" ").map(Number);
let row = sizeMatrix[0];
let col = sizeMatrix[1];

let sum = 0;

for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
        if (r % 2 === 0 || r === 0) {
            if (c % 2 === 0 && c !== 1) {
                let num = ((r + c) * 3) + 1
                //print(num)
                sum += num;
                if (r !== 0 && c !== 0 && r !== row - 1 && c !== col - 1) {
                    let num = ((r + c) * 3) + 1
                    sum += num;
                    //print(sum)
                }
            }
            //sum from odd rows
        } else {
            if (c % 2 !== 0) {
                let num = ((r + c) * 3) + 1
                //print(num)
                sum += num
                if (c !== col - 1 && r !== row - 1) {
                    let num = ((r + c) * 3) + 1
                    sum += num;
                    // print(sum)
                }
            }
        }
    }
}
print(sum)

//////////////////////////
//Solve with while-loop //
//////////////////////////

// let r = 0;
// let c = 0;
// while (r < row) {
//     while (c < col) {
//         //sum of even rows
//         if (r % 2 === 0 || r === 0) {
//             if (c % 2 === 0 && c !== 1) {
//                 let num = ((r + c) * 3) + 1
//                 //print(num)
//                 sum += num;
//                 if (r !== 0 && c !== 0 && r !== row - 1 && c !== col - 1) {
//                     let num = ((r + c) * 3) + 1
//                     sum += num;
//                     //print(sum)
//                 }
//             }
//             //sum from odd rows
//         } else {
//             if (c % 2 !== 0) {
//                 let num = ((r + c) * 3) + 1
//                 //print(num)
//                 sum += num
//                 if (c !== col - 1 && r !== row - 1) {
//                     let num = ((r + c) * 3) + 1
//                     sum += num;
//                     // print(sum)
//                 }
//             }
//         }
//         c++;
//     }
//     r++;
//     c = 0;
// }
// print(sum)

//////////////////////////
// Solve with for-loop ///
//////////////////////////

// for (let i = 0; i < row; i += 2) {
//     for (let j = 0; j < col; j += 2) {
//         let num = ((i + j) * 3) + 1
//         sum += num;
//         // print(num)
//         if (i !== 0 && j !== 0 && i !== row - 1 && j !== col - 1) {
//                 let num = ((i + j) * 3) + 1
//                 sum+=num;
//                 // print(num)
//         }
//     }
// }
// // print(sum);  //149

// //========================================== SUM IF THE ROW IS ODD
// for (let i = 1; i < row; i += 2) {
//     for (let j = 1; j < col; j += 2) {
//         let num = ((i + j) * 3) + 1
//         // print(num)
//         sum += num
//         if (j !== col - 1 && i!==row-1) {
//             let num = ((i + j) * 3) + 1
//             sum += num;
//             // print(num)
//         }
//     }
// }
// print(sum)