"use strict";
//q32: Checking Usernames: Do the following to create a program that simulates how websites ensure that 
// everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ['Asif', 'Abbas', 'NASIM', 'umair', 'Huzefa', 'moaz'];
let new_users = ['Adnan', 'ABBAS', 'Nasim', 'Asif', 'Shahid', 'ahsan'];
for (let c = 0; c < new_users.length; c++) {
    for (let b = 0; b < current_users.length; b++) {
        if (new_users[c].toLowerCase() === current_users[b].toLowerCase()) {
            //console.log(`users matched ${new_users[c]} & ${current_users[b]}`)
            console.log(` User ${new_users[c]} from New user list is available in current user list `);
        }
    }
}
