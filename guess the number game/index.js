let compGuess;
let userGuess = [];
let maxGuess;

const init=()=>{
    document.getElementById("gameArea").style.display = "none"
    document.getElementById("new").style.display = "none"
compGuess = Math.floor(Math.random()*100)

console.log(compGuess)

}


const startGame= ()=>{
document.getElementById("welcomeArea").style.display = "none"

document.getElementById("gameArea").style.display = "block"

}



const newGame=()=>{
    document.getElementById("new").style.display = "inline"
    document.getElementById("inp").setAttribute("disabled",true)
}


const loadGame = ()=>{

    window.location.reload()
}



const guessNum =()=>{

    const inp = Number(document.getElementById("inp").value)

    userGuess = [...userGuess,inp]

    document.getElementById("guesses").innerHTML = userGuess
    document.getElementById("att").innerHTML = userGuess.length


   if (userGuess.length < maxGuess){
    
    if (inp > compGuess) {

        document.getElementById("urGuess").innerHTML = "your Guess is High"
        document.getElementById("inp").value = ""
    }
    else if (inp < compGuess) {
        document.getElementById("urGuess").innerHTML = "your Guess is Low"
    document.getElementById("inp").value = ""
}
    else {
        document.getElementById("urGuess").innerHTML = "your Guess is Correct"
        document.getElementById("inp").value = ""
        newGame()
    }
}else{
    if (inp > compGuess) {

        document.getElementById("urGuess").innerHTML = `You Loose Correct Number was ${compGuess}`
        document.getElementById("inp").value = ""
        newGame()
    }
    else if (inp < compGuess) {
        document.getElementById("urGuess").innerHTML = `You Loose Correct Number was ${compGuess}`
    document.getElementById("inp").value = ""
    newGame()
}
    else {
        document.getElementById("urGuess").innerHTML = "your Guess is Correct"
        document.getElementById("inp").value = ""
        newGame()
    }
}



}









const easy = ()=>{

    maxGuess = 10
    startGame()
    console.log(maxGuess)
}




const hard = ()=>{

    maxGuess = 5
    startGame()
    console.log(maxGuess)
}

