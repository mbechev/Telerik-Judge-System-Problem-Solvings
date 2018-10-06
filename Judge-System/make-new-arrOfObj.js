// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map((user) =>
//  ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
//  })
// );

// console.log(usersMapped);




const validator = function (num) {
    const number = num;

    const validateLarger = function (min) {
        if (number <= min) {
            throw new Error(`${number} is smaller than ${min}`);
        }
        return number;
    };
    return validateLarger ;
};

// Private variable
// console.log(number); // ReferenceError: number is not defined

// TODO
// validator usage!
//
let x = validator(2);
console.log(x);

