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


let z1: true = true;
//let z2: true = false; // error
console.log(z1);

let z2: false = false;
console.log(z2);


let n1: 10.314 = 10.314;
//let n2: 10.314 = 100; // error


let student: object = {
    name: 'wlado'
};
console.log(student); //compile error

class StudentInfo {
    readonly firstName: string;
    readonly lastName: string;
    constructor(firstName: string,lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let student2 = new StudentInfo("lee", "jinam");
console.log(student2.firstName);
console.log(student2.lastName);