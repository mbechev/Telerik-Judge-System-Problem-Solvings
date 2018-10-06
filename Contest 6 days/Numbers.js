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
    "0 -10 -490 0"
];
init(input);
let numbers = gets().split(" ").map(Number);
let a = numbers[0];
let b = numbers[1];
let aab = numbers[2];
let abb = numbers[3];

if (a !== 0 && b !== 0 && aab !== 0 && abb !== 0) {
    print(a, b, aab, abb)
} else if (a === 0 && b === 0 && aab === 0 && abb === 0) {
    a = -1000;
    b = -1000;
    aab = (a ** 2) * (-1000);
    abb = (-1000) * (b ** 2);
    print(a, b, aab, abb)
} else if (a === 0) {
    if (b !== 0) {
        if (abb !== 0 && aab !== 0) {
            a = abb / (b ** 2);
        } else if (aab !== 0 && abb === 0) {
            a = Math.sqrt(aab / b);
            abb = a * (b ** 2);
        } else if (aab === 0 && abb !== 0) {
            a = abb / b ** 2;
            aab = (a ** 2) * b;
        }
        print(a, b, aab, abb);

    } else if (b === 0) {
        if (abb === 0 && aab === 0) {
            b = -1000;
            a = -1000;
            abb = a * (b ** 2);
            aab = (a ** 2) * b
        } else if (aab !== 0 && abb === 0) {
            a = -1000;
            b = -1000;
            abb = (b ** 2) * a;
        } else if (aab === 0 && abb !== 0) {
            a = -1000;
            b = -1000;
            aab = (a ** 2) * b;
        }
        print(a, b, aab, abb)
    }
} else if (a !== 0) {
    if (b === 0) {
        if (abb === 0 && aab === 0) {
            b = -1000;
            aab = (a ** 2) * b;
            abb = a * (b ** 2);
        } else if (aab === 0 && abb !== 0) {
            b = Math.sqrt(abb / a);
            aab = (a ** 2) * b;
        } else if (aab !== 0 && abb === 0) {
            b = aab / (a ** 2);
            abb = a * (b ** 2);
        }
        print(a, b, aab, abb);

    } else if (b !== 0) {
        if (abb === 0 && aab === 0) {
            aab = (a ** 2) * b;
            abb = a * (b ** 2);
        } else if (aab !== 0 && abb === 0) {
            abb = a * (b ** 2);
        } else if (aab === 0 && abb !== 0) {
            abb = a * (b ** 2);
        }
        print(a, b, aab, abb)
    }
}