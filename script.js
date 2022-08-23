/**
 * A simple rock paper scissor program that repeats the game
 * until either the bot or the user scores 5 points to win.
 * A string input of either rock, paper, scissors is asked from
 * the user, case insensitive.
 * The program shows the score points every round and will stop
 * when someone scores 5 points and displays the winner.
 */

const p_show_message = document.querySelector("#show-message");
const p_bot_score = document.querySelector("#bot-score");
const p_player_score = document.querySelector("#player-score");
const score_container = document.querySelector(".score-container");
const button_container = document.querySelector(".button-container");

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
 * Calls @function getComputerChoice()
 * Calls @function getPlayerChoice()
 * Uses @function isWin() to determine if user is a winner
 * Displays the winner
 * @param {*} _ 
 * @return an object containing user and bot winning scores
 */
 let user = ""; // get user selection by button

let playRound = () => {
    let bot = getComputerChoice(); //generates random computer move
    let userWinCount = 0;
    let botWinCount = 0;
    let scores = {
        user : userWinCount,
        bot : botWinCount
    };

    if (isWinRound(bot, user)){
        p_show_message.textContent = "You win!";
        // alert(`You win! Your ${user} beats Bot's ${bot}`);
        scores.user++;
    } else if (bot === user){
        p_show_message.textContent = "Draw!";
        // alert(`Computer: ${bot}\nPlayer: ${user}\n"Draw!"`);
    } else {
        p_show_message.textContent = "You lose!";
        // alert(`You lose! Your ${user} is beaten by Bot's ${bot}`);
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

    let hasWinner = false;

    if (botCount === 5){
        stopGame();
        p_show_message.textContent = 'The Bot wins!';
        p_show_message.style.color = 'red';
        hasWinner = true;

    } else if (userCount === 5) {
        stopGame();
        p_show_message.textContent = 'You win!';
        p_show_message.style.color = 'green';
        hasWinner = true;
    }
}

let results = 0;
let userWins = 0;
let botWins = 0;

let stopGame = () => {
    rock_btn.style.display = 'none';
    paper_btn.style.display = 'none';
    scissors_btn.style.display = 'none';
    play_again_btn.style.display = 'block';
};

let playAgain = () => {
    const play_again = document.querySelector("#play-again");
    p_show_message.style.display = "block";
    p_show_message.textContent = "Choose your move!";
    p_show_message.style.color = 'white';
    p_show_message.style.fontFamily = 'Arial';
    p_player_score.textContent = 0;
    p_bot_score.textContent = 0;
    rock_btn.style.display = 'inline-block';
    paper_btn.style.display = 'inline-block';
    scissors_btn.style.display = 'inline-block';
    play_again_btn.style.display = 'none';
};

/* UI ELEMENTS INTERACTION*/
const rock_btn = document.querySelector("#rock");
rock_btn.addEventListener('click', () => {
    user = "rock";
    results = playRound();
    userWins += results.user;
    botWins += results.bot;
    p_player_score.textContent = userWins;
    p_bot_score.textContent = botWins;
    isWinGame(botWins, userWins);
});

const paper_btn = document.querySelector("#paper");
paper_btn.addEventListener('click', () => {
    user = "paper";
    results = playRound();
    userWins += results.user;
    botWins += results.bot;
    p_player_score.textContent = userWins;
    p_bot_score.textContent = botWins;
    isWinGame(botWins, userWins);
});

const scissors_btn = document.querySelector("#scissors");
scissors_btn.addEventListener('click', () => {
    user = "scissors";
    results = playRound();
    userWins += results.user;
    botWins += results.bot;
    p_player_score.textContent = userWins;
    p_bot_score.textContent = botWins;
    isWinGame(botWins, userWins);
});

const play_again_btn = document.querySelector("#play-again");
play_again_btn.addEventListener('click', () => {
    playAgain();
    userWins = 0;
    botWins = 0;
});