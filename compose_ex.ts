
interface Car {
    name: string;
    age: number;
}
function getDisplayCarName(c: Car) {
    return c.name.toLowerCase();
}
function getCarLength(s: string) {
    return s.length;
}

const getDisplayCarNameLength = composed(
    getDisplayCarName,
    getCarLength,
);

getDisplayCarNameLength({
    name: "Lamborgini",
    age: 22
});