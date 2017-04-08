var BasicCard = require('./BasicCard.js');

var ClozeCard = require('./ClozeCard.js');

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");
console.log('\n----------\n');
// "Who was the first president of the United States?"
console.log('Basic Card Front: ' + firstPresident.front);

// "George Washington"
console.log('Basic Card Back: ' + firstPresident.back);

console.log('\n----------\n');
var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log('\n----------\n');
// "George Washington"
console.log('Cloze Card Cloze: ' + firstPresidentCloze.cloze);

// " ... was the first president of the United States.
console.log("Cloze Card Partial: " + firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log("Cloze Card Full: " + firstPresidentCloze.fullText);

console.log('\n----------\n');

console.log('Broken Cloze Card');

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

console.log('\n----------\n');

//Add new Cards here !


