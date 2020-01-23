
const guessNumber = function () {
    
    let randomNumber = Math.floor(Math.random()* 10), 
        strNumber = prompt('Guess a number between 0 and 10:');
    const intNumber = parseInt(strNumber);

    if(intNumber < randomNumber){     
        return 'Your number is lower then the correct answer.';
    } else if(intNumber > randomNumber){
        return 'Your number is higher then the correct answer.';
    } else {
        return 'Correct answer.'
    }
}

for(let i = 0; i < 3; i++){
    alert(guessNumber());
}

