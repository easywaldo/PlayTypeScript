let student: [string, string, number] = ['computer', 'easywaldo', 20];
console.log(student);

student = ['math', 'tom', 19];
//student = ['science', 'bob', 'error']; //error message:


let friends: [string, ...string[]] = ['jane', 'kayazu', 'joe', 'leo'];

let mixed: [number, boolean, ...string[]] = [1, false, 'horse', 'dog', 'cat'];


console.log(friends);
console.log(mixed);