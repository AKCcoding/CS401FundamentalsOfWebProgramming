const prompt = require('prompt-sync')({sigint: true});

var favoriteArtistAge = prompt("What is the age of your favorite artist?");
compareArtistAge(favoriteArtistAge);

function compareArtistAge(artistAge) {
    if (artistAge < 25) {
      console.log("They're " + artistAge + " years old and they're younger than Google.");
    } else if (artistAge == 25) {
      console.log("They're " + artistAge + " years old and they're as old as Google.");
    } else {
      console.log("They're " + artistAge + " years old and they're older than Google.");
    }
  }