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
    "2 4"
];
init(input)

const createListNode = (value) => {
    return {
        value,
        next: null,
        prev: null
    };
};

const createQueue = () => {
    let firstNode = null;
    let lastNode = null;

    const peek = () => {
        return firstNode.value;
    };

    const isEmpty = () => {
        return firstNode === null && lastNode === null;
    };

    const enqueue = (value) => {
        const newNode = createListNode(value);

        if (firstNode === null && lastNode === null) {
            firstNode = newNode;
            lastNode = newNode;
            return;
        }

        lastNode.next = newNode;
        lastNode = newNode;
    };

    const dequeue = () => {
        if (firstNode === null) {
            return null;
        }

        const first = firstNode;
        firstNode = firstNode.next;

        if (firstNode === null) {
            lastNode = null;
        }

        return first.value;
    };

    const queue = {
        peek,
        enqueue,
        dequeue,
        isEmpty,
    };

    return queue;
};

let queue = createQueue();
let param = gets().split(" ").map(Number);
let N = param[0];
let M = param[1];

queue.enqueue(N);
let count = 0;
let result = 0;
while (!queue.isEmpty()) {
    let S = queue.dequeue();
    count++;
    if(count===M){
        result = S;
        break;
    }

    queue.enqueue(S + 1);
    queue.enqueue(2 * S + 1);
    queue.enqueue(S + 2);
}
print(result)