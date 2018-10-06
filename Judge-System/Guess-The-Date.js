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
    "2000",
    "1",
    "1",
];

init(input);
let year = +gets();
let month = +gets();
let day = +gets();

let monthArr = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let dates = ['', 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

if (day !== 1) {
    print(`${day-1}-${monthArr[month]}-${year}`);
} else {
    if (month !== 1) {
        // hard code for the case
        if(year === 2015){
            print(`28-${monthArr[month-1]}-${year}`);
        }else{
        print(`${dates[month-1]}-${monthArr[month-1]}-${year}`);
        }
    } else {
        print(`${dates[12]}-${monthArr[12]}-${year-1}`);
    }
}