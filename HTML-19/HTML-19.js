
let writeField = document.getElementById("writeField");
let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", changeLetters);

function changeLetters(){
        let letters = [];
        let input = document.getElementById("input").value;
        input.split('').forEach(function(c) {
            if (c === c.toUpperCase()) {
                letters.push(c.toLowerCase());
            }
            else  {
                letters.push(c.toUpperCase());
            }
        });
        writeField.innerText = letters.join('');
}