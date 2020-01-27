let randomNumber = Math.floor(Math.random() * 6);
let colors = ['red', 'green', 'blue', "brown", "violet", "orange"];
randomNumberFunction();
colorTable();



document.getElementById('click-this').addEventListener('click', shuffleRandomTable);
document.getElementById('table-here').addEventListener('click', selectColors);

function randomNumberFunction() {
    let result = document.getElementById('result');
    result.innerHTML = randomNumber;
    shuffle(colors);
    let randomNumberTwo = Math.floor(Math.random() *6);
    result.innerHTML = 'Tap the <span style="color: ' + colors[randomNumberTwo] + '">'+colors[randomNumber]+'</span>';
}
function selectColors(event) {
    let color = event.target.getAttribute('data-color'); // event.target.dataset.color
    if (randomNumber <= 2) {
        if (color == colors[randomNumber]) {
            alert('You got it!');
            console.log(randomNumber);
        } else {
            alert('You didn\'t got it!')
        }
    } else if (randomNumber > 2) {
        if (color == colors[randomNumber]) {
            alert('You didn\'t got it!');
            console.log(randomNumber);
        } else {
            alert('You got it!')
        }
    }
}


function shuffleRandomTable() {
    randomNumberFunction();
    colorTable()
}

function colorTable() {
    let tabela = '<table>';
    shuffle(colors);
    for (let i = 0; i < 1; i++) {
        tabela += '<tr>';
        for (let j = 0; j < 6; j++) {
            tabela += '<td style="background:' + colors[j] + '" data-color="'+colors[j]+'"></td>';
        }
        tabela += '</tr>'
    }
    tabela += '</table>';
    document.getElementById('table-here').innerHTML = tabela
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
