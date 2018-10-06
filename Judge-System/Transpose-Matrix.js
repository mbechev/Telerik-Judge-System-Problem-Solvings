const input = [
    [1, 2, 3],
    [4, 5, 6],
];

const transpose = function(A) {
    let temp = [];
    const res = [];
    for (let a = 0; a < A[0].length; a++) {
        temp = [];
        for (let b = 0; b < A.length; b++) {
            temp.push(A[b][a]);
        }
        res.push(temp);
    }
    return res;
};
