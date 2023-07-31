"use strict";
//q37: Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.
function make_shirt(size, msg) {
    return (` ${size}, ${msg} `);
}
console.log(make_shirt("T-Shirt Size : Large", "I love TypeScript. Make a large shirt and a medium shirt with the default message, \n and a shirt of any size with a different message."));
