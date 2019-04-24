var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    return Employee;
}());
function getDisplayName(p) {
    console.log(p.name.toLocaleLowerCase());
    return p.name.toLowerCase();
}
function getLength(s) {
    console.log(s.length);
    return s.length;
}
// has type '(p: Person) => number'
var getDisplayNameLength = function (a, b) { return (getDisplayName(a), getLength(b)); };
// works and returns the type 'number'
var waldo = new Employee("waldo", 39);
getDisplayNameLength(waldo, waldo.name);
//getDisplayNameLength({ name: "Person McPersonface", age: 42 });
