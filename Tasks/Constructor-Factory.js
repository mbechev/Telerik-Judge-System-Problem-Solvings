// // //If you have return - it is a factory
// const createPerson = function (firstName, secondName, age, street, number) {
//     function fullName() {
//         return this.firstName + " " + this.secondName;
//     }


//     return {
//         firstName,
//         secondName,
//         age,
//         fullName,
//         address: {
//             street: street,
//             number: number
//         },
//     }
// }

// let person = createPerson("Pesho", "Snow", 95, "Sofia", 1000);

// console.log(person.firstName);
// console.log(person.address);
// console.log(person.fullName());


// //Constructor

// function Person(firstName, secondName, age, streetAdress, numberAdress) {
//     this.firstName = firstName;
//     this.secondName = secondName;
//     this.age = age;

//     this.address = {
//         street: streetAdress,
//         number: numberAdress,
//     };

//     this.fullName = function () {
//         return this.firstName + " " + this.secondName;
//     }

//     this.GetPersonData = function () {
//         return Object.values(this).filter((prop) => typeof prop !== "object");
//     }

//     return this
// }

// let person = new Person("Pesho", "Snow", 95, "Sofia", 1000);

// console.log(person.GetPersonData());

let printInfo = function () {
    console.log(`${this.greeting} ${this.myself} ${this.firstName} ${this.lastName}`);
    console.log(`${this.myself} ${this.age} years old and ${this.myself} living at this address below`);
    console.log(this.address);
}

let martinInfo = {
    greeting: "Hi",
    myself: "I'am",
    firstName: "Martin",
    lastName: "Bechev",
    age: 80,
    address: {
        street: "j.k. 'Dybnika'",
        building: 7,
        floor: 4,
        apartment: 105,
    },
}
// printInfo.call(martinInfo);

martinInfo["info"] = printInfo;
martinInfo.info();