const pesho = {
    name: 'Pesho',
    age: 25,
    sex: 'male',
};

const ivan = {
    name: 'Ivan',
    age: 22,
    sex: 'male',
};

const petq = {
    name: 'Petq',
    age: 27,
    sex: 'female',
};

const mariq = {
    name: 'Mariq',
    age: 23,
    sex: 'female',
};

const georgi = {
    name: 'Georgi',
    age: 29,
    sex: 'male',
};
const people = [pesho, ivan, petq, mariq, georgi];

// FIRST TASK
function printName(name) {
    return name;
}
for (const object of people) {
    console.log(printName(object.name));
}

// console.log(pesho.name);
// console.log(ivan.name);
// console.log(petq.name);
// console.log(mariq.name);
// console.log(georgi.name);


// SECOND TASK


const every = (array, func) => {
    for (const object of array) {
        const funcResult = func(object);
        if (!funcResult) {
            return false;
        }
    }
    return true;
};

const underThirty = every(people, ((person) => person.age < 30));
if (underThirty) {
    console.log('All under 30!');
}


// if (pesho.age < 30 && ivan.age < 30 && petq.age < 30 && mariq.age < 30 && georgi.age < 30) {
//     console.log('All under 30!');
// }


// THIRD TASK

const sum = (array, func) => {
    let result = 0;
    for (const object of array) {
        result += func(object);
    }
    return result;
};
const total = sum(people, ((person) => person.age));
console.log(`The sum of the age of all people is ${total}`);

// const sumAge = pesho.age + ivan.age + petq.age + mariq.age + georgi.age;
// console.log(`The sum of the age of all people is ${sumAge}`);

// FOURTH TASK

const gender = (array, func) => {
    const result = [];
    for (const object of array) {
        if (func(object)) {
            result.push(object);
        }
    }
    return result;
};

const males = gender(people, ((person) => person.sex === 'male'));
console.log('males', males);

const females = gender(people, ((person) => person.sex === 'female'));
console.log('females', females);
