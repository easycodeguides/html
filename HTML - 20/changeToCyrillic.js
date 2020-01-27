let latinLetters = document.getElementById("latin").value.toString().toLowerCase();

function changing() {
    document.getElementById("cyr").innerHTML = getCyrillic(latinLetters).toString();
}

function getCyrillic(latin) {
    let cyrillic = latin;
    let latinString = latin.split('');
    let cyrillicString = cyrillic.split('');
    for (let i = 0; i < latinString.length; i++) {
        if (latinString[i] === "l" && latinString[i+1] === "j") {
            cyrillicString = setCharAt(cyrillicString, i ,"љ");
            i++;
        }
        if (latinString[i] === "n" && latinString[i+1] === "j") {
            cyrillicString=setCharAt(cyrillicString,i ,"њ");
            i++;
        }
        if (latinString[i] === "d" && latinString[i+1] === "ž") {
            cyrillicString=setCharAt(cyrillicString,i ,"џ");
            i++;
        }
        if (latinString[i] !== "l" && latinString[i] !== "n" && latinString[i] !== "d") { cyrillicString=setCharAt(cyrillicString, i , switchTo(latinString[i])); }
    }
    return cyrillicString.join('');
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

function switchTo(latinCharacter) {
    let cyrillicCharacter = latinCharacter;
    if (latinCharacter === "a") { cyrillicCharacter = "а"}
    if (latinCharacter === "b") { cyrillicCharacter = "б"}
    if (latinCharacter === "v") { cyrillicCharacter = "в"}
    if (latinCharacter === "g") { cyrillicCharacter = "г"}
    if (latinCharacter === "d") { cyrillicCharacter = "д"}
    if (latinCharacter === "đ") { cyrillicCharacter = "ђ"}
    if (latinCharacter === "e") { cyrillicCharacter = "е"}
    if (latinCharacter === "ž") { cyrillicCharacter = "ж"}
    if (latinCharacter === "z") { cyrillicCharacter = "з"}
    if (latinCharacter === "i") { cyrillicCharacter = "и"}
    if (latinCharacter === "j") { cyrillicCharacter = "ј"}
    if (latinCharacter === "k") { cyrillicCharacter = "к"}
    if (latinCharacter === "l") { cyrillicCharacter = "л"}
    if (latinCharacter === "m") { cyrillicCharacter = "м"}
    if (latinCharacter === "n") { cyrillicCharacter = "н"}
    if (latinCharacter === "o") { cyrillicCharacter = "о"}
    if (latinCharacter === "p") { cyrillicCharacter = "п"}
    if (latinCharacter === "r") { cyrillicCharacter = "р"}
    if (latinCharacter === "s") { cyrillicCharacter = "с"}
    if (latinCharacter === "t") { cyrillicCharacter = "т"}
    if (latinCharacter === "ć") { cyrillicCharacter = "ћ"}
    if (latinCharacter === "u") { cyrillicCharacter = "у"}
    if (latinCharacter === "f") { cyrillicCharacter = "ф"}
    if (latinCharacter === "h") { cyrillicCharacter = "х"}
    if (latinCharacter === "c") { cyrillicCharacter = "ц"}
    if (latinCharacter === "č") { cyrillicCharacter = "ч"}
    if (latinCharacter === "š") { cyrillicCharacter = "ш"}
    return cyrillicCharacter;
}