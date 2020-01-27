function guessNumber(from, to, numberOfTrials) {
    
    const randomNumber = Math.round(Math.random() * (to - from)) + from;
    
    for(let i = 1; i <= numberOfTrials; i++){
        
        const yourNumber = Number(prompt(`Guess the number from ${from} to ${to}.`));
        
        if(yourNumber == randomNumber){
            alert('You guessed the number!');
            break;
        } else if(numberOfTrials - i > 0) {

            if(!yourNumber || (yourNumber < from || yourNumber > to)){
                alert('You entered incorrect number or out of the interval');
            } else {       
                if(yourNumber > randomNumber){
                    alert('Your number is higher then the correct answer.');
                } else {
                    alert('Your number is lower then the correct answer.');
                }
            }
        } else {
            alert('You lost!')        
            break;
        } 
    }
}

guessNumber(0, 10, 3);

