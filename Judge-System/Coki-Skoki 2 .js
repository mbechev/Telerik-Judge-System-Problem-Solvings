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
    "6",
    "1 4 2 6 3 4",
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

let stack = createStack();

let numberOfBulding = +gets();
let buildings = gets().split(" ").map(Number);
let maxSkoks = [];
let sizeStack = 0;

for (let i = buildings.length - 1; i >= 0; i--) {

    while (!stack.isEmpty() && buildings[stack.peek()] <= buildings[i]) {
        let index = stack.pop();
        maxSkoks[index] = sizeStack;
        sizeStack--;
    }
    stack.push(i);
    sizeStack++;
}
while (!stack.isEmpty()) {
    let index = stack.pop();
    maxSkoks[index] = sizeStack;
    sizeStack--;
};

let result = [];
maxSkoks.forEach(function(element){
    result.push(element-1);
})
print(Math.max(...result));
print(result.join(" "));