function changing() {
    let latinLetters = document.getElementById("latin").value.toString().toLowerCase();
    document.getElementById("cyr").innerHTML = getCyrillic(latinLetters).toString();
}

function getCyrillic(latin) {
    let cyrillic = latin;
    for (let i = 0; i < latin.length; i++) {
        if (latin[i] === "l" && latin[i+1] === "j") {
            cyrillic = setCharAt(cyrillic, i ,"љ");
            i++;
        }
        if (latin[i] === "n" && latin[i+1] === "j") {
            cyrillic=setCharAt(cyrillic,i ,"њ");
            i++;
            //continue; ? radi li ovo u js?
        }
        if (latin[i] === "d" && latin[i+1] === "ž") {
            cyrillic=setCharAt(cyrillic,i ,"џ");
            i++;
            //continue;
        }
        if (i > 0 && latin[i] === "j" && latin[i-1] !== "l" && latin[i-1] !== "n") {
            cyrillic=setCharAt(cyrillic, i , switchTo(latin[i]));
        }
        if (i > 0 && latin[i] === "ž" && latin[i-1] !== "d") { cyrillic=setCharAt(cyrillic, i , switchTo(latin[i])); }
        if (latin[i] !== "j" && latin[i] !== "ž") { cyrillic=setCharAt(cyrillic, i , switchTo(latin[i])); }
    }
    return cyrillic;
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