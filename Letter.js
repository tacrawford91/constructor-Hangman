function Letter (char)  {
    this.char = char,
    this.letterGuessed = false,
    this.show = function() {
        if (this.letterGuessed) {
            //display letter
            return this.char
        } else {
            //display placeholder
            return "_"
        }
    },
    this.check = function (userGuess) {
        if ( userGuess === this.char) {
            this.letterGuessed = true;
            return true
        } else{
            return false 
        }
    } 
}

module.exports = Letter;

// var l = new Letter("l");
// console.log(l)

// function playGame() {
//     inquirer.prompt(
//         {
//             type: "input",
//             name: "userGuess",
//             message: "Guess a Letter: "
//         }
//     ).then(function(answer) {
//     var userGuess = answer.userGuess
//     l.check(userGuess);
//     if (l.letterGuessed === false) {
//         console.log("user guess was" + userGuess)
//         console.log("THe character is" + l.char)
//         playGame()
//     } 

//     })
// }
// playGame()