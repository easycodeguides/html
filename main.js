
let clickHTML = document.getElementById('click-html');
let htmlLists = document.getElementById('html-lists');
clickHTML.addEventListener('click',openHTML);

function openHTML() {
    htmlLists.style.display = 'block';

}

let clickCSS = document.getElementById('click-css');
let cssLists = document.getElementById('css-lists');
clickCSS.addEventListener('click',openCSS);

function openCSS() {
    cssLists.style.display = 'block';
    return cssLists
}

document.getElementById('click-javascript').addEventListener('click',openJS);

function openJS() {
    let jsLists = document.getElementById('javascript-lists');
    jsLists.style.display = 'block';
}