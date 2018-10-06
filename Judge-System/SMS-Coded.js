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

const input= [
    "happy"
];

init(input);

let word = gets();
let newWord = "";
if(word.length === 1){
    newWord = word[0];
}else{
newWord = word[0] + word[1] + word[0];
}
for (let i = 2 ; i < word.length ; i++){
newWord+=word[i]+newWord
}    
print(newWord)
