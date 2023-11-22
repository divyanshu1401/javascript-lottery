
const form = document.querySelector('form')
const lotteryNumber = Math.floor(Math.random()*100) + 1
const warning = document.getElementById('lowOrHi')
console.log(lotteryNumber)
form.addEventListener('submit', e=>{
    e.preventDefault();
    warning.innerText=""
    const guessedvalue = document.getElementById("guessField").value
    if(isNaN(guessedvalue) || guessedvalue > 100 || guessedvalue < 1){
        warning.innerText = "Please enter a valid number between 1 and 100"
    }
    else{
    const previousGuess = document.getElementById("guesses")
    previousGuess.innerText = previousGuess.innerText + " " + guessedvalue

    const lastResult = document.getElementById("lastResult")
    
    lastResult.innerText = parseInt(lastResult.innerText) - 1

    

    if(guessedvalue == lotteryNumber)
        console.log("winner")
        
    document.getElementById("guessField").value = ""

    if(lastResult.innerText == 0)
        lastResult.innerText = `Game Over. Random number was ${lotteryNumber}\n`
        previousGuess.innerText = ""
    }
})