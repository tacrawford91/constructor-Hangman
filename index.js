const inquirer = require("inquirer");
const wordJS = require("./Word.js");


var indexTurns = 6;
var wordList = ["jurassic","scott", "smells", "laptops", "boilermaker", "northwestern","javascript","hacker"];
var wordCounter = Math.floor(Math.random()*wordList.length);
var currentLevel = new wordJS.Word(wordList[wordCounter]);
//store guessed letters
var lettersGuessed = [];
var correctLetters = [];
var firstGame = false;


function playGame() {
    //show display for firt time 
    if(indexTurns === 6 && firstGame === false) {
        console.log("LETS PLAY NODE HANGMAN!");
        currentLevel.displayWord();
        firstGame = true;
    }
    inquirer.prompt(
        {
            type: "input",
            name: "userGuess",
            message: "Guess a Letter: "
        }
    ).then(function(answer) {
        //stpre users guess
    var userGuess = answer.userGuess.toLowerCase();;
    var indexCheckArray = wordJS.checkArray;
    //check to see if the letter has been guessed if not store if it has send message and replay turn
        if (lettersGuessed.includes(userGuess)) {
            console.log(`${userGuess}: already guessed, try again`);
            playGame();
        } else {
            //push letter guessed into array 
            lettersGuessed.push(userGuess);
        //check user guess to each letter, set value to true if match
        if (currentLevel.checkUserGuess(userGuess) === true) {
            //push user guess into correctletter array
            currentLevel.secretWord.split("").forEach(function(element){
                if(userGuess === element) {
                    correctLetters.push(userGuess);
                }
                if (element === "") {
                    correctLetters.push(element);
                }
            })
            //correct
            console.log(`correct! \n Turns Remaining: ${indexTurns}
            `)
            gameScoreLogic();
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
        playGame()
    }
    if (indexTurns> 0 && correctLetters.length === currentLevel.secretWord.length) {
        //remove last word from word array
        wordList.splice(wordCounter,1);
        if (wordList.length === 0) {
            console.log("Congrats! You beat the entire game. Have a drink. You deserve it!"); 
            return
        } else {
        console.log("winner winner chicken dinner. Next word Generated. Good Luck");
        wordCounter = Math.floor(Math.random()*wordList.length);
        //generate new word
        currentLevel = new wordJS.Word(wordList[wordCounter]);
        //reset turns
        indexTurns = 6;
        // empty check array
        correctLetters = [];
        // empty letters Guessed
        lettersGuessed = [];
        //playGame
        currentLevel.displayWord();
        playGame();
        }
    }
    if (indexTurns === 0 && correctLetters.length !== currentLevel.secretWord.length) {
        console.log("shucks, you lost. Don't Give up!");

    }
}
