//q35:Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!

let animals,test : string[];
let a : number;
for ( a = 0; a<3; a++){
    if(a===0) {
        animals = 'Horse'
    }  else if (a === 1) {
        animals = 'Dog'
    } else if (a===2){
        animals = 'Cow'
    } else if (a>2) {
        animals = [`${a+1}th`]
       
    }
   console.log("The great Pet : ",animals);
}
console.log("'In these all animals have common characteristics, They are obedient' ")