//q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//and you have space for only two guests.

//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
//a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
//of your program.


console.log("Unfortunately new bigger dinner table has't arrived till so i am \n able to invites only a two person, further i will inform accordingly\n");
let guests : string[] = [ 'Manni', 'Saaquib', 'Zaman', 'Shahid', 'Farooq', 'Hameed' ];
console.log("All members list ", guests)
let b = 1;
for (let count = 0; count <= guests.length; count++){
   console.log("value of count ", count)
    guests.shift();
    
}
//console.log("Last line ", guests);
for (let count = 0; count < guests.length; count++){     
    console.log(` Mr. ${guests[count]} you are still invited please join dinner on date 9th July 2023, Thanks `);
   }
for (let count = 0; count <= guests.length; count++){
         guests.shift();
}
console.log("Array became all remaining elements removed empty ",guests);