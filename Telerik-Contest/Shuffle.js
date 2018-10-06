class Node {
    constructor(value, prev) {
        this.value = value;
        this.next = null;
        this.prev = prev || null;

        if (prev) {
            prev.next = this;
        }
    }
}

function detach(node) {
    if (node.prev) {
        node.prev.next = null;
    }

    if (node.next) {
        node.next.prev = null;
    }

    node.next = null;
    node.prev = null;
}

function attach(left, right) {
    if (left === right) {
        return;
    }

    left.next = right;
    right.prev = left;
}

function insert(node, left, right) {
    if (right === null) {
        left.next = node;
        node.prev = left;
        node.next = null;
        return;
    }

    left.next = node;
    node.prev = left;
    node.next = right;
    right.prev = node;
}




// Snipet Input

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
    "5 5",
    "1 2 1 2 5",
];
init(input);

let param = gets().split(" ").map(Number);
let N = param[0];
let K = param[1];

let array = [];
let numbers = []
let current = null;
for (let i = 1; i <= N; i++) {
    let node = new Node(i, current);
    array.push(node);
    numbers.push(node.value);
    current = node;
}


let shuffleNumArr = gets().split(" ").map(Number);

for (let i = 0; i < K; i++) {}