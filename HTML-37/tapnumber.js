let gameType = Math.random() > 0.5 ? 'TAP' : 'DO_NOT_TAP';
let textColorRandomNumber = randomNumberFunction(0, 5);
let colors;
differentTextColor();
colorTable();

document.getElementById('click-this').addEventListener('click', shuffleRandomTable);
document.getElementById('table-here').addEventListener('click', selectColors);

function randomNumberFunction(start, end) {
    return Math.floor(Math.random() * (end - start)) + start;
}

function differentTextColor() {
    let result = document.getElementById('result');
    let randomBackgroundColor = randomNumberFunction(0, 5);
    colors = ['red', 'green', 'blue', "brown", "violet", "orange"];
    if (gameType === 'TAP') {
        result.innerHTML = 'Tap the <span style="color: ' + colors[randomBackgroundColor] + '">' + colors[textColorRandomNumber] + '</span>';
    } else {
        result.innerHTML = 'Don\'t tap the <span style="color: ' + colors[randomBackgroundColor] + '">' + colors[textColorRandomNumber] + '</span>';
    }
}
function selectColors(event) {
    let color = event.target.getAttribute('data-color'); // event.target.dataset.color
    colors = ['red', 'green', 'blue', "brown", "violet", "orange"];
    let correct;
    if (gameType === 'TAP') {
        correct = color === colors[textColorRandomNumber];
    } else {
        correct = color !== colors[textColorRandomNumber];
    }
    if (correct) {
        alert('You got it');
    } else {
        alert('You didn\'t got it!')
    }
}
function shuffleRandomTable() {
    randomNumberFunction();
    colorTable();
}

function colorTable() {
    let boxColor = '<div>';
    shuffle(colors);
    boxColor += '<tr>';
    for (let j = 0; j < 6; j++) {
        boxColor += '<div style="background:' + colors[j] + '" data-color="' + colors[j] + '" class="box"></div>';
    }
    boxColor += '<div>';
    document.getElementById('table-here').innerHTML = boxColor
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}