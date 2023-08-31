let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    losses : 0,
    ties : 0
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
    if (!isAutoPlaying){
        intervalId = setInterval(function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
    
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';
    if (playerMove === `Scissors`){
        if(computerMove === 'Rock'){
            result ='You Lose';
        }else if(computerMove === 'Paper'){
            result ='You Win';
        }
        else if (computerMove === 'Scissors'){
            result = 'Its a Tie';
        }
        }
    else if (playerMove === `Paper`){
                        
        if(computerMove === 'Rock'){
            result = 'You Win';
        }else if(computerMove === 'Paper'){
            result = 'Its a Tie';
        }
        else if (computerMove === 'Scissors'){
            result = 'You Lose';
        }
        
        }
    else if(playerMove === `Rock`){
        if(computerMove === 'Rock'){
            result = 'Its a Tie';
        }else if(computerMove === 'Paper'){
            result = 'You Lose';
        }
        else if (computerMove === 'Scissors'){
            result = 'You Win';
        }
        }

        if(result === `You Win`){
        score.wins += 1;
        }else if (result === `You Lose`){
            score.losses += 1;
        }else if (result === `Its a Tie`){
            score.ties += 1;
        }
        localStorage.setItem(`score` , JSON.stringify(score));
        updateScoreElement();

        document.querySelector('.js-result').innerHTML =  result;
        document.querySelector('.js-moves').innerHTML = `You <img class="move-icon"  src="${playerMove}.png"> - <img class="move-icon"  src="${computerMove}.png"> Computer`;
        

       /* alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
        Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties} `); */        
    
}
function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = ` Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties} `
};
let computerMove='';
function pickComputerMove(){
    const randomNumber = Math.random();

if(randomNumber >=0 && randomNumber <1/3 ) {
    computerMove='Rock';
}
else if(randomNumber >=1/3 && randomNumber <2/3){
    computerMove = 'Paper';

 }
else if(randomNumber >=2/3 && randomNumber <1){
    computerMove = 'Scissors';
}
return computerMove;
}