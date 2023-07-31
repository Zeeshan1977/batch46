"use strict";
// Q16 more space in dining table
let livingordeceased = ["Shahid", "Zaman", "Babar", "Munni"];
console.log(` Dear all ${livingordeceased[0]}, ${livingordeceased[1]}, ${livingordeceased}\n
i got a new bigger dinner table so i invite more three peoples for dinner\n
soon we will met, Thanks`);
livingordeceased.unshift("Mani"); // add new guest in start
console.log(livingordeceased, "add new guest named Umair in start");
livingordeceased.push("Asif"); // add new guest in last 
console.log(livingordeceased, "add new guest named Haseeb in last");
livingordeceased.splice(3, 0, "Saaquib");
console.log(livingordeceased, "add new guest named Sarfaraz in mid");
console.log(livingordeceased.length, "Length of array");
for (let count = 0; count < livingordeceased.length; count++) {
    console.log(`Mr. ${livingordeceased[count]} After added with some more guests i would like to invite to have a dineer with us on dated Sunday 9th July 2023 at my home thanks to join us\n `);
}
