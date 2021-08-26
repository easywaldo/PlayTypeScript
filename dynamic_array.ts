function buildArray() {
    let a = [];
    a.push(10);
    a.push("hello");
    return a;
}

let myArray = buildArray();
//myArray.push(true); // not allowed
myArray.push("easy waldo"); // allowed String
myArray.push(999); // allowed number

console.log(myArray);
