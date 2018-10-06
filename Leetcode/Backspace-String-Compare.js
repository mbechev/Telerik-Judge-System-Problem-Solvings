// Using Stack

var backspaceCompare = function (S, T) {
    let firstArr = [];
    S.split("").forEach((element) => {
        if (element !== "#") {
            firstArr.push(element);
        } else if (element === "#") {
            if (firstArr !== []) {
                firstArr.pop();
            }
        }
    });

    let secondArr = [];
    T.split("").forEach((element) => {
        if (element !== "#") {
            secondArr.push(element);
        } else if (element === "#") {
            if (secondArr !== []) {
                secondArr.pop();
            }
        }
    });
    let first = firstArr.join("");
    let second = secondArr.join("");
    if (first === second) {
        return true;
    } else {
        return false;
    }
}
console.log(backspaceCompare("ab#c", "ad#c"));