const inquirer = require("inquirer");
const wordJS = require("./Word1.js");


var indexTurns = 7
var wordList = ["jurassic","scott", "smells", "desktop", "boiler maker"]
var wordCounter = Math.floor(Math.random()*wordList.length);
var currentLevel = new wordJS.Word(wordList[wordCounter]);
//store guessed letters
var lettersGuessed = []
var correctLetters = []


function playGame() {
    //show display for firt time 
    if(indexTurns === 7) {
        console.log("LETS PLAY NODE HANGMAN!")
        currentLevel.displayWord();
    }
    inquirer.prompt(
        {
            type: "input",
            name: "userGuess",
            message: "Guess a Letter: "
        }
    ).then(function(answer) {
        //stpre users guess
    var userGuess = answer.userGuess
    var indexCheckArray = wordJS.checkArray

    //check to see if the letter has been guessed if not store if it has send message and replay turn
        if (lettersGuessed.includes(userGuess)) {
            console.log(`${userGuess}: already guessed, try again`)
            playGame();
        } else {
            //push letter guessed into array 
            lettersGuessed.push(userGuess);
        //check user guess to each letter, set value to true if match
        if (currentLevel.checkUserGuess(userGuess) === true) {
            // console.log(`LOOOKIE HERE IS THIS BEING RAN TWICE -  - ${currentLevel.checkUserGuess(userGuess)}`)
            //push user guess into correctletter array
            currentLevel.secretWord.split("").forEach(function(element){
                if(userGuess === element) {
                    correctLetters.push(userGuess);
                }
            })
            //correct
            console.log(`correct! \n Turns Remaining: ${indexTurns}
            `)
            gameScoreLogic()
            // (currentLevel.checkUserGuess(userGuess) === false)
        } else {
            indexTurns--
            console.log(`Incorrect :( \n Turns Remaining: ${indexTurns}
                `);
            gameScoreLogic();
            }
        } 
    })
}


playGame()



function gameScoreLogic() {
    if (indexTurns> 0 && correctLetters.length < currentLevel.secretWord.length) {
        // console.log(correctLetters.length)
        // console.log("secret word len"+currentLevel.secretWord.length)
        // console.log("turns from index" + indexTurns)

        playGame()
    }
    if (indexTurns> 0 && correctLetters.length === currentLevel.secretWord.length) {
        console.log("winner winner chicken dinner");
        console.log("Next Word Generate");
        //remove last word from word array
        console.log(wordList) 
        wordList.splice(wordCounter,1);
        if (wordList.length === 0) {
            console.log("Congrats! You beat the entire game. Have a drink. You deserve it!"); 
            return
        }
        console.log(wordList);
        wordCounter = Math.floor(Math.random()*wordList.length);
        //generate new word
        currentLevel = new wordJS.Word(wordList[wordCounter]);
        //reset turns
        indexTurns = 8;
        // empty check array
        correctLetters = [];
        // empty letters Guessed
        lettersGuessed = [];
        //playGame
        playGame();
    }
    if (indexTurns === 0 && correctLetters.length !== currentLevel.secretWord.length) {
        console.log("loser loser, youre a loser");

    }
}























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
//         //stpre users guess
//     var userGuess = answer.userGuess
//     //check user guess to each letter, set value to true if match
//     jurassic.userCharCheck(userGuess);
//     //update display 
//     jurassic.returnString();
//     // turnsRemaining--
//     if (indexTurns> 0) {
//         // check if word is complete
//        if(correctLetters.length === jurassic.wordArray.length) {
//            console.log("HORRRAYYYYYYYY")
//        };
//         playGame()
//     }



//                                                 // } else if ( turnsRemaining > 0 && !completeWordCheck.includes("_")) {
//                                                 //     console.log(!completeWordCheck.includes("_"))
//                                                 //     console.log(completeWordCheck);
//                                                 //     console.log(`winner winner chicken dinner`);
//                                                 // } else if (turnsRemaining === 0 && completeWordCheck.includes("_")){
//                                                 //     console.log(`you lose`)
//                                                 // }

//     })
// }
// playGame()