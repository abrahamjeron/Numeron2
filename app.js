// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
const playbtn=document.getElementById("play-button");
playbtn.addEventListener('click',function play(){
    location.href="game.html"
})
