function guessNumber(from, to, numberOfTrials) {
    
    const randomNumber = Math.round(Math.random() * (to - from)) + from;
    
    for(let i = 0; i < numberOfTrials; i++){
        
        const yourNumber = Number(prompt(`Guess the number from ${from} to ${to}.`));
        
        if(!yourNumber || (yourNumber < from || yourNumber > to)){
            alert('You entered incorrect number or out of the correct interval');
        } else {
            if(yourNumber < randomNumber){     
                alert('Your number is lower then the correct answer.');
            } else if(yourNumber > randomNumber){
                alert('Your number is higher then the correct answer.');
            } else {
                alert('You guessed the number.');
                break;
            }
        }
    }
}

guessNumber(0, 10, 3);

