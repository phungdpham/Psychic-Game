var letters = ["a", "b", "c","d", "f", "g",
                "h", "j", "k","l", "q", "w",
                "e", "r", "t","y", "u", "i",
                "n", "v", "m","x", "z", "o",
                ];

//Creating an array that holds user's guesses
var guessedLetters = [];

//Creating variable with letter that user's guess has to match
var letterToGuess = null;

//Counting down user' guesses
var guessesLeft = 9;

//Counting for wins and losses
var wins = 0;
var losses = 0;

//Functions for updateguesses, updateGuessesLeft, and updateGuessesSoFar
var updateGuessesLeft = function () {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function () {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function () {
    document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

//Function that will be called when resetting everything
var reset = function () {
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
};

//Executing on page load
updateLetterToGuess();
updateGuessesLeft();

//Function that captures the keyboard clicks
document.onkeydown = function (event) {
    //reducing guesses by one
    guessesLeft--;
    //Lowercase the letter
    var letter = String.fromCharCode(event.which).toLowerCase();
    // adding the guess to the guessesLetter array
    guessedLetters.push(letter);
    //Running the update functions
    updateGuessesLeft();
    updateGuessesSoFar();

    //Checking if matching
    if (letter == letterToGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        reset();
    }
    //result if no match
    if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        reset();
    }

}