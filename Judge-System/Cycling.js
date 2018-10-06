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
    "5",
    "20 15 40",
    "5 18 10",
    "21 13 50",
    "10 15 12",
    "22 15 43",

];

init(input);
let inputDays = +gets();

let fastestDay = 0;
let tempAvgSpeed = Number.MIN_SAFE_INTEGER;
let days = 0;
let hours = 0;
let minutes = 0;

for (let i = 1; i <= inputDays; i++) {
    let param = gets().split(" ").map(Number);
    let inputHours = param[0];
    let inputMinutes = param[1];
    let kilometres = param[2];

    let averageSpeed = kilometres / ((inputHours * 60) + inputMinutes);
    if (averageSpeed > tempAvgSpeed) {
        tempAvgSpeed = averageSpeed;
        fastestDay = i;
    }
    minutes += inputMinutes;
    if (minutes > 59) {
        minutes = minutes - 60;
        hours++;
    }
    hours += inputHours;
    if (hours > 24) {
        hours = hours - 24;
        days++;
    }
}
print(days, hours, minutes, fastestDay);