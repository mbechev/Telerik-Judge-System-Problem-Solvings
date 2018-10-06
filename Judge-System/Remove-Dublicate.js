const createLinkedList = () => {
    let first = null;
    let last = null;

    const isEmpty = () => {
        if (first === null && last === null) {
            return true;
        }

        return false;
    };

    const remove = (node) => {
        if (node.prev === null) {
            first = node.next
            node.next.prev = null;
            return node;
        }
        if (node.next === null) {
            node.prev.next = null;
            last = node.prev
            return node
        }

        if (node !== first && node !== last) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            return node;
        }
    };

    const find = (value) => {
        let node = first;
        while (node !== null) {
            if (node.value === value) {
                return node;
            }

            node = node.next;
        }

        return null;
    };


    const toString = () => {
        const stringListValues = [];

        let node = first;
        while (node !== null) {
            stringListValues.push(node.value);
            node = node.next;
        }

        return stringListValues.join(' ');
    };

    const linkedList = {
        isEmpty,
        remove,
        find,
        toString,
    };

    return linkedList;
};


const createLinkedNode = (value) => {
    return {
        value,
        prev: null,
        next: null,
    };
};


let arr = [4, 2, 2, 5, 2, 3, 2, 3, 1, 5, 2]
    .map((el, _) => createLinkedNode(el))
    .map((_, index, array) => {
        if (index === 0) {
            array[index].prev = null;
            array[index].next = array[index + 1];
            return array[index];
        }

        array[index].prev = array[index - 1];
        array[index - 1].next = array[index];

        return array[index];
    });

console.log(arr);
let myList = createLinkedList();

let count = 1;
for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            arr[j] = "";
            count++;
        }
    }

    if (count % 2 !== 0) {
        arr.filter((el) => {
            if (el.value === arr[i].value) {
                if (el.prev === null) {
                    myList.remove(el);
                }
                if (el.next === null) {
                    myList.remove(el);
                } else {
                    myList.remove(el);
                }
            }
        });
    }


    console.log(myList.toString())
    count = 1;
}
console.log(myList.toString())