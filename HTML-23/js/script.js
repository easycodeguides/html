var gaming = ["X","O"];
var players = ["X Player", "O player"];
var currentPlayer = 0;

function game(clickedDiv){
    if(clickedDiv.innerHTML == ''){
        clickedDiv.innerHTML = gaming[currentPlayer];
        changePlayer();
    }   
}

function changePlayer(){
    if(currentPlayer == 0){
        currentPlayer = 1;
    } else {
        currentPlayer = 0;
    }
    document.getElementById('player').innerHTML = "Next is " + players[currentPlayer];
}