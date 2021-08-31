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


let anyArray = [];
anyArray.push(1);
anyArray.push("hello");

let numArray :number[] = [];
numArray.push(1);
//numArray.push("hello");


anyArray.map(e => {
    if (typeof e === 'number') {
        e =  e * 100;
    }
    console.log('e is ' + e);
    //return e.toUpperCase();
})
console.log(anyArray);


