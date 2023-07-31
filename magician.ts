//q41: Magicians: Make a array of magician’s names. Pass the array to a function
//called show_magicians(), which prints the name of each magician in the array.



let arrayMagician= ["Asif","Mustafa","Amir","Kala bangali","Ammir"];
function show_magicians(Name:string[]):void{
for (let c = 0; c< arrayMagician.length; c++){
    console.log(` Magician No ${c+1} Name ${arrayMagician[c]}`)
}
}
show_magicians(arrayMagician);