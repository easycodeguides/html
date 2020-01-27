randomNumberFunction();
colorTable();
document.getElementById('click-this').addEventListener('click', shuffleRandomTable);

function randomNumberFunction() {
    let randomNumber = Math.floor(Math.random() * 6);
    let result = document.getElementById('result');
    result.innerHTML = randomNumber;
    let colorText = ['#f00', '#0f0', '#00f', "#f00", "#0f0", "#00f"];
    shuffle(colorText);
    for (let i = 0; i < 6; i++) {
        if (i == randomNumber) {
            if (randomNumber == 0) {
                result.innerHTML = 'Tap the <span style="color: ' + colorText[i] + '">color_0</span>';
                console.log(randomNumber);
            } else if (randomNumber == 1) {
                result.innerHTML = 'Tap the <span style="color: ' + colorText[i] + '">color_1</span>';
                console.log(randomNumber);
            } else if (randomNumber == 2) {
                result.innerHTML = 'Tap the <span style="color: ' + colorText[i] + '">color_2</span>';
                console.log(randomNumber);
            } else if (randomNumber == 3) {
                result.innerHTML = 'Don\'t tap the <span style="color: ' + colorText[i] + '">color_3</span>';
                console.log(randomNumber);
            } else if (randomNumber == 4) {
                result.innerHTML = 'Don\'t tap the <span style="color: ' + colorText[i] + '">color_4</span>';
                console.log(randomNumber);
            } else {
                result.innerHTML = 'Don\'t tap the <span style="color: ' + colorText[i] + '">color_5</span>';
                console.log(randomNumber);
            }
        }
    }


    function selectColors(event) {
        let id = event.target.getAttribute('id');
        if (randomNumber <= 2) {
            if (id && id.charAt(6) == randomNumber) {
                alert('You got it!');
                console.log(randomNumber);
            } else {
                alert('You didn\'t got it!')
            }
        } else if (randomNumber > 2) {
            if (id && id.charAt(6) == randomNumber) {
                alert('You didn\'t got it!');
                console.log(randomNumber);
            } else {
                alert('You got it!')
            }
        }

    }

    document.getElementById('table-here').addEventListener('click', selectColors);

}
function shuffleRandomTable() {
    randomNumberFunction();
    colorTable()
}


function colorTable() {
    let tabela = '<table>';
    let colors = ['color_0', 'color_1', 'color_2', 'color_3', 'color_4', 'color_5'];
    shuffle(colors);
    for (let i = 0; i < 1; i++) {
        tabela += '<tr>';
        for (let j = 0; j < 6; j++) {
            tabela += '<td id="' + colors[j] + '">' + colors[j] + '</td>';
        }
        tabela += '</tr>'
    }
    tabela += '</table>';
    document.getElementById('table-here').innerHTML = tabela
}


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
