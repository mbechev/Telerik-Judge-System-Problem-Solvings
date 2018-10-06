'use strict';

const inputArr = [
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
];


const flipAndInvertImage = function(A) {
    const arr = [];

    for (const iterator of A) {
        arr.push(func(iterator.reverse()));
    }

    function func(array) {
        array.forEach((value, index) => {
            if (value === 1) {
                array.splice(index, 1, 0);
            } else {
                array.splice(index, 1, 1);
            }
        });

        return array;
    }

    return arr;
};
console.log(flipAndInvertImage(inputArr));
