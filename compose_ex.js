function getDisplayCarName(c) {
    return c.name.toLowerCase();
}
function getCarLength(s) {
    return s.length;
}
var getDisplayCarNameLength = compose(getDisplayCarName, getCarLength);
getDisplayCarNameLength({
    name: "Lamborgini",
    age: 22
});
