let as: readonly number[] = [1,2,3];
let bs: readonly number[] = as.concat(4);
let three = bs[2];


type A = readonly string[];
type B = ReadonlyArray<string>;
type C = Readonly<string[]>;
type D = readonly [number, string];
type E = Readonly<[number, string]>;


as[4] = 5;      //error
as.push(6);     //error