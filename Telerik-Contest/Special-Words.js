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
    "nap teachers cheaters pan ear era hectares"
];
init(input);

let words = gets().split(" ");
let resultArr = [];

for (let i = 0; i < words.length; i++) {
    resultArr.push(words[i]);
    words[i] = words[i].split("").sort().join("");
}
print(words);
print(resultArr);

for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
        if (words[i] === words[j]) {
            words.splice(j, 1);
            resultArr.splice(j, 1);
            i = 0;
            j = i;
        }
    }
}



print(resultArr.join(" "))