interface Person {
    name: string;
    age: number;
}

class Employee {
    constructor(public name: string, public age: number) {
    }
}

function getDisplayName(p: Person) {
    console.log(p.name.toLocaleLowerCase());
    return p.name.toLowerCase();
}

function getLength(s: string) {
    console.log(s.length);
    return s.length;
}

// has type '(p: Person) => number'
const getDisplayNameLength = (a, b) => (getDisplayName(a), getLength(b))

// works and returns the type 'number'
let waldo = new Employee("waldo", 39);

getDisplayNameLength(waldo, waldo.name);
//getDisplayNameLength({ name: "Person McPersonface", age: 42 });