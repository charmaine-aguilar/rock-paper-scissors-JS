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
    choice = choice.toLowerCase();

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
    let bot = getComputerChoice();
    let user = getPlayerChoice();
    
    if (isWin(bot, user))
        alert(`Computer: ${bot}\nPlayer: ${user}\n"You win!"`);
    else if (bot === user)
        alert(`Computer: ${bot}\nPlayer: ${user}\n"Draw!"`);
    else
        alert(`Computer: ${bot}\nPlayer: ${user}\n"You lose!"`);
};

/**
 * Determines the winning conditions of the game
 * @param {*} botMove string as chosen move of the bot
 * @param {*} userMove string as player's chosen move
 * @returns boolean depending on winning conditions
 */
let isWin = (botMove, userMove) => {
    if ((userMove === "rock" && botMove === "scissors") ||
        (userMove === "paper" && botMove === "rock") ||
        (userMove === "scissors" && botMove === "paper"))
        return true;
}

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