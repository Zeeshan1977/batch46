//q15:Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.
//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.


let livingordeceased :string[] = ["Faraz","Nomi","Faisal"];
console.log(`Mr. ${livingordeceased[0]} i would like to invite to have a dineer with us on dated Sunday 9th July 2023 at my home thanks to join us `);
console.log(`Mr. ${livingordeceased[1]} i would like to invite to have a dineer with us on dated Sunday 9th July 2023 at my home thanks to join us `);
console.log(`Mr. ${livingordeceased[2]} i would like to invite to have a dineer with us on dated Sunday 9th July 2023 at my home thanks to join us `);
console.log(`Due to some personal issue Mr. ${livingordeceased[1]} is not joing us on dineer`);
livingordeceased[1]="Asif";
console.log(`Mr. ${livingordeceased[0]} i would like to invite to have a dineer with us on dated Sunday 9th July 2023 at my home thanks to join us `);
console.log(`Mr. ${livingordeceased[1]} i would like to invite to have a dineer with us on dated Sunday 9th July 2023 at my home thanks to join us `);
console.log(`Mr. ${livingordeceased[2]} i would like to invite to have a dineer with us on dated Sunday 9th July 2023 at my home thanks to join us `);