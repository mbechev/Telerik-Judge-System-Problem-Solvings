function ListNode(val) {
    return {
        val,
        next: null,
    }
}

var middleNode = function (head) {
    let node = head;
    let listLength = 0;
    while (node) {
        listLength++;
        node = node.next
    }

    let nodeToDetach = 0;
    if (listLength % 2 !== 0) {
        nodeToDetach = Math.floor(listLength / 2)
    } else {
        nodeToDetach = listLength / 2;
    }
    let temp = 0;

    node = head;
    while (true) {
        if (temp === nodeToDetach) {
            head = node.next
            break;
        }

        if (node.next === null) {
            head = node;
            break;
        } else {
            node = node.next;
        }

        temp++;
    }

    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next
    }
    // console.log(result);
    return result;
};

let node = ListNode(1);
node.next = ListNode(2);
// node.next.next = ListNode(3);
// node.next.next.next = ListNode(4);
// node.next.next.next.next = ListNode(5);
// node.next.next.next.next.next = ListNode(6);


middleNode(node)