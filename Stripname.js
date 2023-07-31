"use strict";
//Q6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
//Then print the name after striping the white spaces.
console.log("\Stripingthename");
let namewithWhitespace = "\t \n Zeeshan Abbas \n \t";
console.log("Name with Whitespace:");
console.log("$$" + namewithWhitespace + "$$");
let namewithoutWhitespace = namewithWhitespace.trim();
console.log("Name without Whitespace:");
console.log("***" + namewithoutWhitespace + "***");
