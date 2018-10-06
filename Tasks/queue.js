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


let stack = createStack();
let queue = createQueue();

