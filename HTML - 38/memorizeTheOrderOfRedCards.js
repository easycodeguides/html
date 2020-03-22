let userCombination = [];
let combination = randomArray();

function randomArray() {
    let a=[];
    for (let i=0;i<30;++i) {
        a[i]=i;
    }
    function shuffle(array) {
        let tmp, current, top = array.length;
        if(top) while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
    }
    a = shuffle(a);
    let arr = [a[1], a[2], a[3], a[4]];
    return arr;
}

async function start() {
    if (userCombination.length > 0) {
        for (let i = 0; i < combination.length; i++) {
            document.getElementById(combination[i].toString()).innerHTML = "";
            document.getElementById(combination[i].toString()).style.backgroundColor = "#267326";
        }
    }
    for (let i = 0; i < combination.length; i++) {
        userCombination = [];
        await setTimeout(function () {
            document.getElementById(combination[i].toString()).style.backgroundColor = "#ff1a1a";
        }, i * 1500);
    }
    for (let i = 0; i < combination.length; i++) {
        await setTimeout(function () {
            document.getElementById(combination[i].toString()).style.backgroundColor = "#267326";
        }, 6100);
    }
}

function trying(idCard) {
    if (userCombination.length < 4) {
        userCombination.push(parseInt(idCard));
    } else {
        alert("You already clicked 4 times! Start a new game.")
    }
    check(userCombination.indexOf(parseInt(idCard)), parseInt(idCard));
}

function check(index, orderNumber) {
    for (let i = 0; i < combination.length; i++) {
        if (index === i && orderNumber !== combination[i]) {
            wrongOrder();
        }
        if (index === 3 && orderNumber === combination[i]) {
            alert("Correct!");
        }
    }
}

async function wrongOrder() {
    for (let i = 0; i < combination.length; i++) {
        await setTimeout(function () {
            document.getElementById(combination[i].toString()).style.backgroundColor = "#ff1a1a";
            let number = i+1;
            document.getElementById(combination[i].toString()).innerHTML = number.toString();
        }, i * 1500);
    }
        await setTimeout(function () {
            alert("Wrong!")
        }, 6100);
}
