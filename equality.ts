//q24: More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let a=5;
if (a>6) {
console.log("Number is >6")
} else if (a===6){
    console.log("Number is = 6")
}
// Test using the lower case function
let name1 = "Zeeshan Abbas";
if (name1===name1.toLowerCase()) {
    console.log(`Name${name1}" is in lower case `)
    }else {
        console.log((`Name ${name1}" is a normal case `))
    }
    //* numerical Test
    a=5;let b=4;
    if (a===b){
        console.log(`A:${a} is = B :${b}`)
    }else if (a !=b) {
    console.log(`A: ${a} is not = to  B:${b}`)
     } else if (a > b) {
        console.log(`A: ${a} is > then  B:${b}`)
    } else if (a < b) {
        console.log(`A: ${a} is < then B:${b}`)
    }else if (a >=b) {
        console.log(`A: ${a} is >= then  B:${b}`)
    }else if (a <=b) {
        console.log(`A: ${a} is <= then  B:${b}`)
    }
    //* test using "and"and "or" Operators
    let nationality ='Pakistan';
    let age =60;
    if (nationality==='Pakistani' && age ===60){
        console.log('You are a Senior Citizen in Pakistan')
    }else if (nationality==='Pakistani' ||age >=18){
        console.log('You are eligible to obtain CNIC')
    }
//test for array
let item : string [];
console.log ('String data can not not be restored in an array type string')
//Test wehter an item is in array
item = ["Mr.Zeeshan"] //Allow to add item as an array element
console.log (`${item}, can be saved b/c it is array type element`)
