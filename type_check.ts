let number = (3).toString() + [1].toString();
console.log(number);


let a = 1 + 2;
let b = a + 3;
let c = {
    apple: a,
    banana: b,
}
let d = c.apple * 4;

console.log(a,b,c,d);



let unknownValue : unknown = 30;
let b2 = unknownValue === 123;
//let c2 = unknownValue + 10;
if (typeof unknownValue === 'number') {
    let d = unknownValue + 10;
    console.log(d);
}
