'use strict';


let judgeCircle = function (moves) {
    let countD = 0,
        countR = 0,
        countL = 0,
        countU = 0;

    let array = moves.split('');
    for (const word of array) {
        if (word === "U") {
            countU++;
        } else if (word === "L") {
            countL++;
        } else if (word === "D") {
            countD++;
        } else if (word === "R") {
            countR++;
        }
    }
    let isTrue = (countD === countU) && (countL === countR);
    if (isTrue) {
        return true
    } else {
        return false
    }
};
console.log(judgeCircle("LL"));