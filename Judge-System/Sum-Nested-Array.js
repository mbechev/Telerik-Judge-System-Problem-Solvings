let array = [
    1, 2, 3,
    [1, 2, 3],
    [4, 5, 6, [8, 10, 20, 15]],
    [1, 1, 1, [3, 2, 9, 0, 20, [5, 4, 3]]],
    [0, 0, 0, [0, 0, 0, 0, 0, [0, 0, 0, 0, 0, [0, 0, 0, 0, 0, [1, 0]]]]]
]

let totalSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += totalSum(arr[i])
        } else {
            sum += arr[i]
        }
    }
    return sum
}
console.log(totalSum(array))