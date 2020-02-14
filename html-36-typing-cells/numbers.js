document.getElementById("newGame").addEventListener("click", startNewGame);
var timeLeft = 40;
var counter = 1;
var gameType;
var myTimeDel;
function startReverseGame(){
  gameType="descending";
  counter=20;
  document.getElementById("directions").innerHTML="Tap number in descending order"
  startGame();
}
function startNewGame() {
  gameType="ascending";
  counter = 1;
  document.getElementById("directions").innerHTML="Tap number in ascending order";
  startGame();
}
function startGame(){

  timeLeft = 40;
  var container = document.getElementById("container");
  container.removeEventListener("click",alertingEndGame);
  container.innerHTML = "";
  var timeDisp = document.getElementById("timeCounter");
  timeDisp.innerHTML = "";
  var arr = [];
  
  for (var index = 1; index <= 20; index++) {
    var oneCell = document.createElement("div");
    oneCell.setAttribute("class", "oneCell");
    var cellNum = Math.ceil(Math.random() * 20);
    if (arr.includes(cellNum) == false) {
      arr.push(cellNum);
      var cellInner = document.createElement("div");
      cellInner.setAttribute("class", "cellInn");
      oneCell.appendChild(cellInner);
      var cellText = document.createElement("p");
      cellText.innerHTML = cellNum;
      cellInner.appendChild(cellText);
      oneCell.addEventListener("click", changeColor);
      container.appendChild(oneCell);
    } else {
      index--;
    }
  }
  myTimeDel=setInterval(timeCountDown, 1000);
}


function changeColor() {
  var x = this.firstChild.firstChild.innerHTML;
  removeOrange();
  if (counter == x) {
   
    
    this.setAttribute("class", "touchedCell");
    this.removeEventListener("click", changeColor);
    this.firstChild.firstChild.innerHTML="";
     if(gameType=="ascending"){
      counter++;
      if(counter==21){
        clearInterval(myTimeDel);
alert("You win. Try it again but descending");
startReverseGame();
      }
    }else{
      counter--;
      if(counter==0){
        clearInterval(myTimeDel);
        alert("You win. Try it again but ascending");
        startNewGame();
      }
    }
  } else {
    showRightCell(counter);
    this.setAttribute("class", "wrongCell");
  }
}

function removeOrange() {
  var redCells = document.getElementsByClassName("wrongCell");
  for (var i = 0; i < redCells.length; i++) {
    redCells[i].setAttribute("class", "oneCell");
  }
}
function showRightCell(counter) {
  var cellsLeft = document.getElementsByClassName("oneCell");
  for (var j = 0; j < cellsLeft.length; j++) {
    if (cellsLeft[j].firstChild.firstChild.innerHTML == counter) {
      cellsLeft[j].setAttribute("class", "rightCell");
    }
  }
}
function timeCountDown() {
  var timeDisp = document.getElementById("timeCounter");
  if (timeLeft > 0) {
    timeDisp.innerHTML = timeLeft;
    timeLeft--;
    //setTimeout(timeCountDown, 1000);
  } else {
    timeDisp.innerHTML = 0;
    gameOver();
  }
}
function gameOver() {
  clearInterval(myTimeDel);
  var remainingCells = document.getElementsByClassName("oneCell");
  for (var i = 0; i < remainingCells.length; i++) {
    remainingCells[i].removeEventListener("click", changeColor);
  }
  var wrongCell = document.getElementsByClassName("wrongCell");
  for (var j = 0; j < wrongCell.length; j++) {
    wrongCell[j].removeEventListener("click", changeColor);
  }
  var rightCell = document.getElementsByClassName("rightCell");
  for (var q = 0; q < rightCell.length; q++) {
    rightCell[q].removeEventListener("click", changeColor);
  }
  var container = document.getElementById("container");
  alertingEndGame();
  container.addEventListener("click",alertingEndGame);
}
function alertingEndGame(){
  alert("Game over. Try again.");
}