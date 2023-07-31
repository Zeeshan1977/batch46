//Q3:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.
var name1 = "Zeeshan Abbas";
console.log("".concat(name1.toUpperCase()));
console.log("".concat(name1.toLowerCase()));
console.log("".concat(toTitleCase(name1)));
function toTitleCase(str) {
    return str.replace(/\w\s*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
