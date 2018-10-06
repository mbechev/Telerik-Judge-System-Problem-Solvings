
const arrayPairSum = function(nums) {
    nums.sort((a, b) => {
return a - b;
}); // 1234

    const newArr = [];


let start = 0;


let end = 2;


const length = nums.length / 2;
    for (let i = length; i > 0; i--) {
    const tempArr = nums.slice(start, end);
    newArr.push(tempArr);
    start += 2;
    end += 2;
    }
    let sum = 0;
    for (const iterator of newArr) {
    func(iterator);
    }

    function func(array) {
    sum += Math.min.apply(null, array);
    return sum;
    }
    return sum;
};
const inputArr = [1, 4, 3, 2];
console.log(arrayPairSum(inputArr));
