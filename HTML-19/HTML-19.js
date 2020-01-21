
let ispisPolje = document.getElementById("ispisPolje");
let submitDugme = document.getElementById("submit");
submitDugme.addEventListener("click", preslovi);

function preslovi(){
        let ispis = [];
        let input = document.getElementById("input").value;
        input.split('').forEach(function(c) {
            if (c === c.toUpperCase()) {
                ispis.push(c.toLowerCase());
            }
            else  {
                ispis.push(c.toUpperCase());
            }
        });
        ispisPolje.innerText = ispis;
}





