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
    "3"

];

init(input);

let size = +gets();
let matrix = [];
let total = size * size; //9

for (let i = 0; i < size; i++) {
    let rs = [];
    for (let j = 0; j < size; j++) {
        rs.push(0);
    }
    matrix.push(rs);
}
let x = 0;
let y = 0;
let step = 0;
for (let i = 0; i < total;) {
    while (y + step < size) {
        i++;
        matrix[x][y] = i;
        y++;
    }
    y--;
    x++;

    while (x + step < size) {
        i++;
        matrix[x][y] = i;
        x++;
    }
    x--;
    y--;

    while (y >= step) {
        i++;
        matrix[x][y] = i;
        y--;
    }
    y++;
    x--;
    step++;

    while (x >= step) {
        i++;
        matrix[x][y] = i;
        x--;
    }
    x++;
    y++;
};
let string = ''

for (let i = 0; i < matrix.length; i++) {
    for (let c = 0; c < matrix.length; c++) {
        string += matrix[i][c] + " ";
    }
    print(string)
    string = ""
}
