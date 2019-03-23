let isDone:Boolean = false;
let MyName:String = "waldo";
let age:Number = 39;
let habits:Array<String> = ["reading books", "coding", "watching movie"];
let numList:Number[] = [1,2,3,4,5];
let tuple:[String, Number] = ["waldo", 100];
enum Color {Red = 1, Green, Blue}
let c:Color = Color.Blue;

console.log(c);

enum Car {
    Avavante = 1,
    Sonata = 2,
    Matiz =3
};
let carName:string = Car[2];
console.log(carName);

PrintInfo();
function PrintInfo() {
    console.log(isDone);
    habits.map(e => {
        console.log(e);
    });
    console.log(c);
}

console.log(greeter("10"));
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";
