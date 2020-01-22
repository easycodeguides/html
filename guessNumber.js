var rNumber = Math.floor(Math.random()* 10);

function guessNumber() {
    
    for(let i = 0; i < 3; i++){
        let sNumber = prompt('Guess a number between 0 and 10:');

        if(parseInt(sNumber) < rNumber){     
            alert('Your number is lower then the correct answer.');
        } else if(parseInt(sNumber) > rNumber){
            alert('Your number is higher then the correct answer.');
        } else {
            alert('Your answer is correct!');
        }
    }
}

guessNumber();

