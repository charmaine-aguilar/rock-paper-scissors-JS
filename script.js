/**
 * A simple rock paper scissor program that runs 5 times.
 */

/**
 * Generates a random number between 0 to 2 which is floored.
 * Then, use randomly generated number as index to choose a
 * random element from pre-defined array of computer moves.
 * @param {*} _ 
 * @returns the computer's chosen random move
 */
let getComputerChoice = _ => {
    let moves = ['rock', 'paper', 'scissors'];

    let randomIndex = Math.floor(Math.random() * 3);

    return moves[randomIndex];
};

/**
 * Prompts user to enter string/move of either rock, paper, scissors.
 * 
 * @param {*} _ 
 * @returns the player's move
 */
let getPlayerChoice = _ => {
    let choice = prompt(("Enter your move: "));

    while (!(choice === "rock" || choice === "paper" || choice === "scissors")) {
        
        /*
        Temporary validation: if null
        null: pressing cancel puts null on input
        "": pressing ok when input field is empty
        */
        if (choice === null || choice === "")
            return choice;

        alert(`${choice} is not a valid response. Try again.`);
        choice = prompt(("Enter your move: "));
    }

    return choice;
};

/**
 * Calls @function getComputerChoice()
 * Calls @function getPlayerChoice()
 * Displays the move chosen by both players
 * @param {*} _ 
 */
let playRound = _ => {

/* 
    Code to determine who wins here
*/

    alert(`Computer: ${getComputerChoice()}\nPlayer: ${getPlayerChoice()}`);
};

/**
 * Calls @function playRound() to run the "game" 5 times.
 * @param {*} _ 
 */
let game = _ => {
    for (let index = 0; index < 5; index++) {
        playRound();
    }
};

/**
 * Start the game.
 */
game();