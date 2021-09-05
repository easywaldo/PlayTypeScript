function sum(numbers: number[]) : number {
    return numbers.reduce((total, n) => total + n, 0)
}

console.log(sum([1,2,3]));


function sumVariadic(...numbers: number[]): number {
    // @ts-ignore
    return Array.from(arguments).reduce((total, v) => total + v , 0);
}

console.log(sumVariadic(1,2,3,4,5));