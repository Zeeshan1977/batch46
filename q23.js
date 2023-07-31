"use strict";
//q23: Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let vehicle = 'Four wheel';
let color = 'Black';
let capacity = '8 persons';
let drive = 'Right hand';
let door = 5;
//let status ="true";
let engine = '1300CC';
let local = "false";
let liecence = "Yes";
let toolkit = "True";
// start tests
if (vehicle === 'Four wheel') {
    console.log(' i like to drive four wheel "Answer should be true b/c i hardcode vehicle value is 4 wheel"');
}
else {
    console.log(' i donot like to drive two wheel');
}
if (color !== 'Black') {
    console.log(' i like black color '); // 
}
else {
    console.log(' i donot like other than black color "Answer should be false b/c i hardcode color value is black"');
}
if (capacity === '4 persons') {
    console.log(' Car capacity is not sutable for my family ');
}
else {
    console.log(' Car capacity should be 8 persons  "Answer should be false b/c capacity value is 8 persons"');
}
if (drive === 'Right hand') {
    console.log('Answer should be Right hand b/c same value is saved in drive variable');
}
if (door === 5) {
    console.log('Answer should be true b/c b/c same value is saved in door variable');
}
// if (status === "true") {
//     console.log( 'I like new car')
// } else {
//     console.log(" Car is old and it will be the answer b/c in status varialbe we have saved true value to status variable")
// }
if (engine === "1500CC") {
    console.log('Car should be upto 1300CC enginer');
}
else {
    console.log(" Car is above 1300CC enginer and this should be the answer b/c in condition we have input value '1500CC' ");
}
if (local === "false") {
    console.log(' I like imported cars and this should be answer b/c condtion is true no need to check else value');
}
if (liecence === "No") {
    console.log(' I have permanent liecence ');
}
else {
    console.log(' I have learning liecence inly "answer should be false b/c in liecence variable we have saved "Yes" value ');
}
if (toolkit === "True") {
    console.log(' Thanks i have toolkit in my car answer should be true b/c condtion is true no need to check else value');
}
