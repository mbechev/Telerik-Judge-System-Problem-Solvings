function unique(arr) {
    let set = new Set();
    arr.forEach((el) => set.add(el));
    return set;
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values));