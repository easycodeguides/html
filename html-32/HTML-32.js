let submitButton = document.getElementById('submit');

function repeat(char, times) {
    let words = [];
    for( let i = 0; i < times; i++) {
        words = words + char;
    };
    return words.toString();
}

submitButton.addEventListener("click",
    function(e) {
    e.preventDefault();
    let wordInput = document.getElementById('wordInput').value;
    let timeInput = document.getElementById('timeInput').value;
    let writeField = document.getElementById('writeField');
    if (wordInput.length > 1 && timeInput > 1) {
        writeField.innerText = repeat(wordInput, timeInput);
    }
    else {
        writeField.innerText = 'Check your length input.';
    }
    });
