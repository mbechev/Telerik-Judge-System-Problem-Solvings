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
    "SEsdflksdlfjsd#$%#$%#$%#$%3lksdjf sdf sdflksjd fs d fs d fsd #$%#$%#%$#%#%# &*(&*(&Q@qwe sdf sdf @#$@$@#$23 sa ds fsdfsdfs $%^$&$&$."
];

init(input);

let string = gets().split("");

let totalCount = 0;
let tempCount = 0;

let CheckElement = (number) => {
    if(number === 32 || number === 46 || number >=48 && number <=57 || number >=65 && number <=90 || number >=97 && number <=122){
        return false
    }
    return true;
}

string.forEach(element => {
    let charElement = element.charCodeAt(0);

    if (CheckElement(charElement)) {
        tempCount++;
    } else {
        tempCount = 0;
    }
    if (tempCount > totalCount) {
        totalCount = tempCount;
    }
});

print(totalCount)