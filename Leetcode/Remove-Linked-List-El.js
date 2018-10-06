function ListNode(val) {
    return {
        val,
        next: null
    }
}
var removeElements = function (head, val) {
    let result = [];
    while (head) {
        if (head.val !== val) {
            result.push(head.val)
        }
        head = head.next;
    }

    let list = [];
    result.forEach((el) => list.push(ListNode(el)));
    let headd = list[0];
    list.forEach((el, index) => {
        if (index < list.length-1) {
            el.next = list[index + 1];
        }else{
            el.next = null
        }
    })
    console.log(list);

    return headd;
};

let head = ListNode(1);
head.next = ListNode(2);
head.next.next = ListNode(2);
head.next.next.next = ListNode(1);
// head.next.next.next.next = ListNode(3);
// head.next.next.next.next.next = ListNode(3);

console.log(removeElements(head, 2));