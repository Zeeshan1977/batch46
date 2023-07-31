"use strict";
//q17: 
console.log("Unfortunately new bigger dinner table has't arrived till so i am \n able to invites only a two person, further i will inform accordingly\n");
let guests = ['Manni', 'Saaquib', 'Zaman', 'Shahid', 'Farooq', 'Hameed'];
console.log("All members list ", guests);
let b = 1;
for (let count = 0; count <= guests.length; count++) {
    console.log("value of count ", count);
    guests.shift();
}
//console.log("Last line ", guests);
for (let count = 0; count < guests.length; count++) {
    console.log(` Mr. ${guests[count]} you are still invited please join dinner on date 9th July 2023, Thanks `);
}
for (let count = 0; count <= guests.length; count++) {
    guests.shift();
}
console.log("Array became all remaining elements removed empty ", guests);
