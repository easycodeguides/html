let form = document.getElementById('form').addEventListener('submit', submitForm);
let wordInput = document.getElementById('wordInput');
let timeInput = document.getElementById('timeInput');
let writeField = document.getElementById('writeField');

function repeat(char, times) {
    let words = "";
    for( let i = 0; i < times; i++) {
        words = words + char;
    };
    return words;
}

function submitForm(e) {
    e.preventDefault();
    if (wordInput.value.length > 1 && timeInput.value > 1) {
        writeField.innerText = repeat(wordInput.value, timeInput.value);
    }
    else {
        writeField.innerText = 'Check your length input.';
    }
}
