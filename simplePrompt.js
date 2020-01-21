simplePrompt = () => {
    let name = prompt('Please, enter your name:');
    let age = prompt('Please, enter your age:');
    
    if(age < 18){
        alert(`${name} is under 18 years old`);
    } else {
        alert(`${name} is 18 years old and above`);
    }
}
simplePrompt();