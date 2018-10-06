// const colors = ['red', 'green', 'red', 'blue', 'red', 'green', 'black', 'black', 'white', 'yellow', 'blue', 'red', 'green'];

// // Write solution here
// const set = new Set(colors);
// console.log(Array.from(set));

// // function unique(arr) {
// //     let set = new Set();
// //      arr.forEach((el)=> set.add(el))
// //    return set
// // }

// // let values = ["Hare", "Krishna", "Hare", "Krishna",
// //     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// // ];

// // console.log(unique(values));
// let map = new Map();

// map.set("name", "John");

// let keys =Array.from(map.keys());
// keys.push("more")

// // Error: numbers.push is not a function
// console.log(Array.from(keys));

let arr = Array.from({
        length: 20,
    })
    .map((_, index) => {
        createNode(index)
    });