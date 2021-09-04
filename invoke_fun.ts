function add(a: number, b: number): number {
    return a + b;
}

let addFunc = add;

console.log(addFunc(10, 10) + addFunc(10, 10) + addFunc(10,10));

addFunc(10, "hello"); //error