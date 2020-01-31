let textColorRandomNumber = randomNumberFunction(0,6,6);
let colors;
differentTextColor();
colorTable();

document.getElementById('click-this').addEventListener('click', shuffleRandomTable);
document.getElementById('table-here').addEventListener('click', selectColors);

function randomNumberFunction(start, end, count) {
    let returnArray = [],
        randomNumber;
    for(let i=0; i<count; i++){
        randomNumber = Math.floor(Math.random() * (end - start)) + start;
        if(returnArray.indexOf(randomNumber) == -1){
            returnArray.push(randomNumber)
        }else {
            --i;
        }
    }
    return randomNumber
}

function differentTextColor() {
    let result = document.getElementById('result');
    let randomBackgroundColor = randomNumberFunction(0,6,6);
    result.innerHTML = randomBackgroundColor;
    colors = ['red', 'green', 'blue', "brown", "violet", "orange"];
    if(textColorRandomNumber <= 2){
        result.innerHTML = 'Tap the <span style="color: ' + colors[randomBackgroundColor] + '">'+colors[textColorRandomNumber]+'</span>';
    }
    if(textColorRandomNumber > 2){
        result.innerHTML = 'Don\'t tap the <span style="color: ' + colors[randomBackgroundColor] + '">'+colors[textColorRandomNumber]+'</span>';
    }
}
function selectColors(event) {
    let color = event.target.getAttribute('data-color'); // event.target.dataset.color
    colors = ['red', 'green', 'blue', "brown", "violet", "orange"];
    if (textColorRandomNumber <= 2) {
        if (color == colors[textColorRandomNumber]) {
            alert('You got it!');
        } else {
            alert('You didn\'t got it!')
        }
    } else if (textColorRandomNumber > 2) {
        if (color == colors[textColorRandomNumber]) {
            alert('You didn\'t got it');
        } else {
            alert('You got it!')
        }
    }
}

function shuffleRandomTable() {
    randomNumberFunction();
    colorTable();
}

function colorTable() {
    let tabela = '<table>';
    shuffle(colors);
        tabela += '<tr>';
        for (let j = 0; j < 6; j++) {
            tabela += '<td style="background:' + colors[j] + '" data-color="'+colors[j]+'"></td>';
        }
        tabela += '</tr>';
    tabela += '</table>';
    document.getElementById('table-here').innerHTML = tabela
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}