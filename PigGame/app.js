/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, activePlayer, roundScores, gamePlaying;

init();

/*dice = Math.floor(Math.random()*6)+1;
console.log(dice);*/

//document.querySelector('#current-'+activePlayer).textContent= dice;


document.querySelector('.btn-roll').addEventListener('click', function (){
    //get random number
    
    if(gamePlaying){
    var dice = Math.floor(Math.random()*6)+1;
    
     //display result
    var diceDom =document.querySelector('.dice');
    
    diceDom.style.display='block';
    diceDom.src ='dice-'+dice+'.png';
    
    
    //add  up round scores untill rolled/random number is  1
    if (dice !== 1){
        
        roundScores += dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScores;
        
        
        }else{
            
            //nextplayer; 
            
            
          nextPlayer();
        }
    }
    
            
});
    
    
document.querySelector('.btn-hold').addEventListener('click', function(){
        
       //update glabal score
    if(gamePlaying){
    scores[activePlayer]=  scores[activePlayer]+roundScores;
   
    
    //update ui
    
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    }
    if(scores[activePlayer]>=20){
    
    document.getElementById('name-'+activePlayer).textContent='Winner!!!!';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');  
    gamePlaying =false;    
        
}else
    
     nextPlayer();
   
});
    
    function nextPlayer(){
            roundScores =0;
            document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';
            activePlayer=== 0?activePlayer=1:activePlayer=0;
            
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            
    }

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    
scores = [0, 0];
activePlayer  = 0;
roundScores = 0;
gamePlaying= true;
    
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active'); 
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.add('active');  
    document.getElementById('name-0').textContent ='Rutu';
    document.getElementById('name-1').textContent ='Reena';

}







