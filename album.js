"use strict";
//q40:Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
let artist_name = "Sing by Zeeshan";
function make_album(songTitle, albumName = "Hun Dasau...") {
    if (songTitle === "Chahaat" || songTitle === "Duriyaan") {
        console.log(songTitle, "is in", albumName, artist_name);
    }
    else {
        console.log(songTitle, "is not in", albumName, "not", artist_name);
    }
}
make_album("Chahaat");
make_album("Duriyaan");
make_album("Dard zamanay k kam na hongay");
