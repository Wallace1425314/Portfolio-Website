'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

function displayMessage(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if (!guess){
        // document.querySelector('.message').textContent = 'No Number';
        displayMessage('No Number')
    }else if(guess === secretNumber){
        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number!')
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if( score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }else if(score <= 1){
        // document.querySelector('.message').textContent = 'You Lose!';
        displayMessage('You Lose!')
        score--;
        document.querySelector('.score').textContent = score;
    }else if(guess !== secretNumber){
        // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!': 'Too Low!';
        displayMessage(guess > secretNumber ? 'Too High!': 'Too Low!')
        score--;
        document.querySelector('.score').textContent = score;
    }
    // }else if(guess > secretNumber){
    //     document.querySelector('.message').textContent = 'Too High!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    // } else if( guess < secretNumber){
    //     document.querySelector('.message').textContent = 'Too Low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;

    // }
}
)

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...')

    document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
}
)