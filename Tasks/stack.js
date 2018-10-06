
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
        "1 2 3 4 5 6 7"
    ];
    
    init(input);
    
    let arr = gets().split(" ").map(Number);
    let stack= createStack();
    
    arr.forEach(element => {
        stack.push(element);
    });
    let temp = [];
    for (let i = 0 ; i < arr.length ; i++){
        temp.push(stack.pop())
    }
    print(temp.join(", "))
    