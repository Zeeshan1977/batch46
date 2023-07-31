//q42: Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.



let arrayMagician= ["Asif","Mustafa","Amir","Shahid","Qamar"];
function make_great(Name:string[]):void{
for (let c = 0; c< arrayMagician.length; c++){
    console.log(` Great Magician No ${c+1} Name ${arrayMagician[c]}`)
}
}
make_great(arrayMagician);
