const inquirer = require("inquirer");
const wordJS = require("./Word1.js");
var completeWordCheck;

var indexTurns = 8
var wordList = ["jurassic"]
var wordCounter = 0
var currentLevel = new wordJS.Word(wordList[wordCounter]);
//store guessed letters
var lettersGuessed = []


function playGame() {
    // if (counter = 5) {
    // console.log(jurassic.returnString())
    // }
    inquirer.prompt(
        {
            type: "input",
            name: "userGuess",
            message: "Guess a Letter: "
        }
    ).then(function(answer) {
        //stpre users guess
    var userGuess = answer.userGuess

    //check to see if the letter has been guessed if not store if it has send message and replay turn
        if (lettersGuessed.includes(userGuess)) {
            console.log(`${userGuess}: already guessed, try again`)
            playGame();
        } else {
            lettersGuessed.push(userGuess);
        //check user guess to each letter, set value to true if match
        if (currentLevel.checkUserGuess(userGuess) === true) {
            gameScoreLogic()
        } else if (currentLevel.checkUserGuess(userGuess) === false) {
            indexTurns--
            gameScoreLogic();
        }
        
        //     function gameScoreLogic() {
        //     if (indexTurns> 0 && wordJS.checkArray.length < currentLevel.secretWord.length) {
        //         // console.log(wordJS.checkArray.length)
        //         // console.log("secret word len"+currentLevel.secretWord.length)
        //         console.log("turns from index" + indexTurns)
        //         playGame()
        //     }
        //     if (indexTurns> 0 && wordJS.checkArray.length === currentLevel.secretWord.length) {
        //         console.log("winner winner chicken dinner");
        //         //generate new word
        //         //playGame
        //     }
        //     if (indexTurns=== 0 && wordJS.checkArray.length !== currentLevel.secretWord.length) {
        //         console.log("loser loser, youre a loser");
        //     }
        // }
        } 
    })
}
playGame()





function gameScoreLogic() {
    if (indexTurns> 0 && wordJS.checkArray.length < currentLevel.secretWord.length) {
        // console.log(wordJS.checkArray.length)
        // console.log("secret word len"+currentLevel.secretWord.length)
        // console.log("turns from index" + indexTurns)
        console.log(`word check array ${wordJS.checkArray.length}`)
        playGame()
    }
    if (indexTurns> 0 && wordJS.checkArray.length === currentLevel.secretWord.length) {
        console.log("winner winner chicken dinner");
        //generate new word
        //playGame
    }
    if (indexTurns === 0 && wordJS.checkArray.length !== currentLevel.secretWord.length) {
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
//        if(wordJS.checkArray.length === jurassic.wordArray.length) {
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
