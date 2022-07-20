/**
 * A simple rock paper scissor program that repeats the game
 * until either the bot or the user scores 5 points to win.
 * A string input of either rock, paper, scissors is asked from
 * the user, case insensitive.
 * The program shows the score points every round and will stop
 * when someone scores 5 points and displays the winner.
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
 * Any input besides choices are invalid and be asked for input again.
 * @param {*} _ 
 * @returns the player's move
 */
let getPlayerChoice = _ => {
    let choice = prompt(("Enter your move: "));
    choice = choice.toLowerCase();

    while (!(choice === "rock" || choice === "paper" || choice === "scissors") || choice === null || choice === "") {

        alert(`${choice} is not a valid response. Try again.`);
        choice = prompt(("Enter your move: "));
    }

    return choice;
};

/**
 * Calls @function getComputerChoice()
 * Calls @function getPlayerChoice()
 * Uses @function isWin() to determine if user is a winner
 * Displays the winner
 * @param {*} _ 
 * @return an object containing user and bot winning scores
 */
let playRound = _ => {

    let bot = getComputerChoice();
    let user = getPlayerChoice();
    let userWinCount = 0;
    let botWinCount = 0;
    let scores = {
        user : userWinCount,
        bot : botWinCount
    };

    if (isWinRound(bot, user)){
        alert(`You win! Your ${user} beats Bot's ${bot}"`);
        scores.user++;
    } else if (bot === user){
        alert(`Computer: ${bot}\nPlayer: ${user}\n"Draw!"`);
    } else {
        alert(`You lose! Your ${user} is beaten by Bot's ${bot}"`);
        scores.bot++;
    }

    return scores;
};

/**
 * Determines the winning conditions of the user
 * @param {*} botMove string as chosen move of the bot
 * @param {*} userMove string as player's chosen move
 * @returns boolean, game result depending on winning conditions
 */
let isWinRound = (botMove, userMove) => {
    if ((userMove === "rock" && botMove === "scissors") ||
        (userMove === "paper" && botMove === "rock") ||
        (userMove === "scissors" && botMove === "paper"))
        return true;
}

let isWinGame = (botCount, userCount) => {
    if (botCount === 5){
        return "Bot wins!";
    } else if (userCount === 5) {
        return "User wins!";
    }
}

/**
 * Calls @function playRound() to run the "game" until
 * someone scores 5 points and wins.
 * @param {*} _ 
 */
let game = _ => {
    let results;
    let userWins = 0;
    let botWins = 0;
    let isPlaying = true;

    while (isPlaying){
        results = playRound();
        userWins += results.user;
        botWins += results.bot;

        alert(` SCORES \n
                Player: ${userWins} \n
                Bot: ${botWins}
        `);

        if (userWins === 5 || botWins === 5){
            alert(isWinGame(botWins, userWins));
            isPlaying = false;
        }
    }
};

/**
 * Start the game.
 */
game();