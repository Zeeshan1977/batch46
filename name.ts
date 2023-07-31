//Q3:Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.

const name1=`Zeeshan Abbas`;
console.log (`${name1.toUpperCase()}`);
console.log (`${name1.toLowerCase()}`);
console.log (`${toTitleCase(name1)}`);
function toTitleCase(str: string) {
    return str.replace(/\w\s*/g, function (txt: string){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
   })
}
