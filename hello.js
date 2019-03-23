var isDone = false;
var MyName = "waldo";
var age = 39;
var habits = ["reading books", "coding", "watching movie"];
var numList = [1, 2, 3, 4, 5];
var tuple = ["waldo", 100];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
var Car;
(function (Car) {
    Car[Car["Avavante"] = 1] = "Avavante";
    Car[Car["Sonata"] = 2] = "Sonata";
    Car[Car["Matiz"] = 3] = "Matiz";
})(Car || (Car = {}));
;
var carName = Car[2];
console.log(carName);
PrintInfo();
function PrintInfo() {
    console.log(isDone);
    habits.map(function (e) {
        console.log(e);
    });
    console.log(c);
}
console.log(greeter("10"));
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
