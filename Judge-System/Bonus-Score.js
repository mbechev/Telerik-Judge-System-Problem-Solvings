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
    "15"
];

init(input);

let score = +gets();
if (score >= 1 && score <= 3) {
    score *= 10;
    print(score);
} else if (score >= 4 && score <= 6) {
    score *= 100;
    print(score);
}else if (score >= 7 && score <= 9) {
    score *= 1000;
    print(score);
}else if (score >=10 || score <=0) {
    
    print("invalid score");
}