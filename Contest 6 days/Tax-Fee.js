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
    "adasd8989898sadsadsd25dsad48ad4sadsdas22as2d222222222asdsadsadsd"
];
init(input)

let string = gets().split(" ");
let max = -1;
let max1 = -1;

if (string.length === 1) {
    let arr = Array.from(...string);
    let array = []
    let newNum = '';
    arr.forEach(element => {
        let number = +element;

        if (number || number === 0) {
            newNum += element;
        } else {
            if (newNum != '') {
                array.push(+newNum)
            }
            newNum = '';
        }
    });
    let newArr = array.filter((el) => el % 2 === 0);
    max1 = Math.max(...newArr);

    //because there is a chance for empty array and answer Infinity
    let result = Math.max(max, max1);
    
    if (max1 === -1) {
        print(-1);
    } else {
        print(result);
    }
} else {
    string.forEach((el) => {
        let number = parseInt(el)
        if (number % 2 === 0) {
            if (nan > max) {
                max = nan;
            }
        }
        return max;
    })
    if (max === -1) {
        print(-1);
    } else {
        print(max);
    }
}