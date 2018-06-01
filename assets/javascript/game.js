//Create variable of computer guess
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Create variables to track numbers of wins, losses, and guesses left!All are setting to zero
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];


//All Functions here

    //Function for computer to randomly select a letter

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //Create an update for guesses left
    var updateGuessesLeft = function () {
        document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    };

    //Create an update for gussed letters
    var updateGuessedLetters = function () {
        document.querySelector("#yourGuesses").innerHTML = "Your Guesses so far: " + guessedLetters;
    };
    

    

    // Function to reset everything
    var reset = function() {
        guessesLeft = 9;
        guessedLetters = [];
        updateGuessesLeft();
        updateGuessedLetters();
        
    };

    computerGuess;
    updateGuessesLeft();

    //This function runs when users press a letter
    document.onkeyup = function(event) {

        //Guesses left that users have
        guessesLeft--;

        //Validate a letter that users pressed
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        //Update guessed Left and guesses so far letter
        updateGuessesLeft();
        updateGuessedLetters();


        //Allow users 9 guesses
        if (guessesLeft > 0){
            
            //Only run when user guess matches computer guess
            if (userGuess == computerGuess) {
                wins++;
                document.querySelector("#win").innerHTML = "wins:" + wins;
                alert("Congratulation! You are psychic");
                reset();
            }

        //Only run when user guess does not match computer guess
        else if(guessesLeft == 0) {
                losses++;
                document.querySelector("#losses").innerHTML =  "Losses: " + losses;
                alert("Sorry, you are not psyhic, let try it again!");
                reset();
            }
        }
    };
