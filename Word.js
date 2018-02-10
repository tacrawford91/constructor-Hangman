const inquirer = require("inquirer");
const Letter = require("./Letter.js");


var checkArray = []
var turnsRemaining = 10;
var guessCorrect = false 
// var displayArray = [];
//word to guess be jurassic 

function Word () {
    this.wordArray = [
        new Letter ("j"),
        new Letter ("u"),
        new Letter ("r"),
        new Letter ("a"),
        new Letter ("s"),
        new Letter ("s"),
        new Letter ("i"),
        new Letter ("c")
    ],
    this.returnString = function() {
        var displayArray = []
        this.wordArray.forEach(function(element) {
                    // element.show();
                displayArray.push(element.show())
                //check if the elemet has been guessed
                // if (element.letterGuessed) {
                //     displayArray.push(element.char)
                //     console.log(`element letter guessed: ${element.letterGuessed}`)
                //     guessCorrect = true;
                // } else {
                //     displayArray.push("_");
                // }
        })
        console.log(displayArray.join(" "))
        // console.log(`guess correct : ${guessCorrect}`)
        // if (guessCorrect === true) {
        // console.log(`Correct!!
        // turns remaining: ${turnsRemaining}
        // ${displayArray.join(" ")}`); 
        // // return displayArray.join("")
        // // guessCorrect = false
        // console.log(guessCorrect);
        // } 
        // if (guessCorrect === false) {
        //     turnsRemaining--
        //     console.log(`INCORRECT :(
        //     turns remaining: ${turnsRemaining}
        //     ${displayArray.join(" ")}`);
        //     console.log(guessCorrect);
        // }
    },
    this.userCharCheck = function (userGuess) {
        this.wordArray.forEach(function(element){
            element.check(userGuess);
            if (element.check(userGuess)) {
            checkArray.push(element.char)
            console.log(`Check array is ${checkArray}`)
            // console.log(`guess correct : ${guessCorrect}`)
            console.log(`Correct!!
            turns remaining: ${turnsRemaining}`)
            }
            })
            // if (!this.wordArray.incudes(userGuess)){
            //     turnsRemaining--
            //     console.log(`Incorrect :(
            //     turns remaining: ${turnsRemaining}`)
            //     }
            // }
    }
    


// function Word (letter) {
//     this.wordArray = [
//         new Letter (Letter)],
//     this.returnString = function() {
//         var displayArray = []
//         this.wordArray.forEach(function(element) {
//             // element.show();
//            //check if the elemet has been guessed
//            if (element.letterGuessed) {
//                displayArray.push(element.char)
//            } else {
//                displayArray.push("_");
//            }
//         })
//         console.log(`${displayArray.join(" ")}`); 
//         // return displayArray.join("")
//     },
//     this.userCharCheck = function (userGuess) {
//         this.wordArray.forEach(function(element){
//             element.check(userGuess);
//         })
//     }
// }

module.exports = {
	Word: Word,
    checkArray: checkArray,
    turnsRemaining: turnsRemaining,
    guessCorrect: guessCorrect
};

// var jurassic = new Word("j","u","r","a","s","s","i","c");

// console.log(jurassic.wordArray);

// // jurassic.returnString();

// var counter = 5;

// function playGame() {
//     // if (counter = 5) {
//     // console.log(jurassic.returnString())
//     // }
//     inquirer.prompt(
//         {
//             type: "input",
//             name: "userGuess",
//             message: "Guess a Letter: "
//         }
//     ).then(function(answer) {
//     var userGuess = answer.userGuess
//     jurassic.userCharCheck(userGuess);
//     jurassic.returnString();
//     counter--
//     if (counter > 0) {
//         playGame()
//     } 

//     })
// }
// playGame(