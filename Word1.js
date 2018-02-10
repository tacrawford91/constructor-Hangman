const Letter = require("./Letter.js");

var checkArray = []
var turnsRemaining = 8

function Word (newWord) {
    this.wordArray = newWord.split('').map(x => new Letter(x)),
    this.secretWord = newWord,
    this.displayWord = function() {
        var displayWord = [] 
        this.wordArray.forEach(function(element) {
            displayWord.push(element.show());
        })
        console.log(`${displayWord.join(" ")}\n`);
    },
    this.checkUserGuess = function (userGuess){
        var wordGuessed = false;
        this.wordArray.forEach(function(element){
            if (userGuess === element.char) {
                //change value of property to display letter not _
                element.letterGuessed = true
                //add to checkarray
                checkArray.push(element.char)
                //change wordguessed to true to alert that a letter was guessed
                wordGuessed = true
            }
        })
        if (wordGuessed === true) {
            console.log(`correct! \n Turns Remaining: ${turnsRemaining}
            `)
            //update display
            this.displayWord();
            return true
        }   
        if (wordGuessed === false) {
            turnsRemaining--
            console.log(`Incorrect :( \n Turns Remaining: ${turnsRemaining}
                `);
             //update display
            this.displayWord();
            return false
        }
    }
}

module.exports = {
    Word: Word,
    turnsRemaining: turnsRemaining,
    checkArray: checkArray
}


