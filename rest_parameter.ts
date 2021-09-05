function sum(numbers: number[]) : number {
    return numbers.reduce((total, n) => total + n, 0)
}

console.log(sum([1,2,3]));


function sumVariadic(...numbers: number[]): number {
    // @ts-ignore
    return Array.from(arguments).reduce((total, v) => total + v , 0);
}

console.log(sumVariadic(1,2,3,4,5));

function add(a: number, b: number) : number {
    return a + b;
}

console.log(add(10, 20));
console.log(add.apply(null, [10, 20]));
console.log(add.call(null, 10, 20));
console.log(add.bind(null, 10, 20)());