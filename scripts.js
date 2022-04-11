'use strict';

const guessEl = document.getElementById('guess');
const message1 = document.getElementById('message');
const btnCheck = document.getElementById('btn-guess');
const btnRetry = document.getElementById('btn-retry');
const scoreEl = document.getElementById('score');
const highScoreEl = document.getElementById('high-score');

let secretNumber = Math.trunc(Math.random() * 20) +1;

let score = 20;
let highScore = 0;


btnCheck.addEventListener('click', function (){
    let guess = Number(guessEl.value);
    
    if(!guess){
        document.querySelector('.message').textContent = 'No number!😒'
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Guessed Correctly ✔';
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor = '#088F8F';

        if (score > highScore){
            highScore = score;
            highScoreEl.textContent = highScore;
        }
    }else if(score > 1){
        if(guess > secretNumber){
            document.querySelector('.message').textContent = 'Too High🙄';
            score--;
            scoreEl.textContent = score;
            guessEl.value = null;
        }else if(guess < secretNumber){
            document.querySelector('.message').textContent = 'Too Low😓';
            score--;
            scoreEl.textContent = score;
            guessEl.value = null;
        }
    }else{
        document.querySelector('.message').textContent = 'You lost the game😢';
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor = '#FF0000';
    }
})
btnRetry.addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) +1;
    scoreEl.textContent = score;
    guessEl.value = null;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.number').textContent = '🤔';
    document.body.style.backgroundColor = 'rgba(2, 131, 2, 0.733)';
})