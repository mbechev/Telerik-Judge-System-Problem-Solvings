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
    "5 * (123 * (1 + 3) + ((4 - 3) / 6))"
    //   0123456789 11    17  2122   28   33 34
];
init(input);

const createListNode = (value) => {
    return {
        value,
        next: null,
        prev: null
    };
};

const createStack = () => {
    let lastNode = null;

    const peek = () => {
        return lastNode.value;
    };

    const isEmpty = () => {
        return lastNode === null;
    };

    const push = (value) => {
        const newNode = createListNode(value);

        if (lastNode === null) {
            lastNode = newNode;
            return;
        }

        newNode.prev = lastNode;
        lastNode = newNode;
    };

    const pop = () => {
        if (lastNode === null) {
            return null;
        }

        const last = lastNode;
        lastNode = lastNode.prev;
        return last.value;
    };

    const stack = {
        peek,
        push,
        pop,
        isEmpty,
    };

    return stack;
};


let expression = gets();
const stack = createStack();

for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "(") {
        stack.push(i);
    } else if (expression[i] === ")") {
        let start = stack.pop();
        print(expression.slice(start, i + 1))
    }
}