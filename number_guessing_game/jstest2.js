//document.getElementById("whatever").setAttribute("disabled", true) how to grey out an element
let max
let randNum
let guessNum = 1
let guessValue

document.getElementById("numberGuessStart").onclick = function(){
    max = document.getElementById("numberGuessMax").value
    
    if (max == '' || max <= 1){
        console.log("no")
    }else{
        max = Number(max)
        console.log(max)
        document.getElementById("numberGuessMax").disabled = true
        document.getElementById("numberGuessStart").disabled = true
        document.getElementById("guess").disabled = false
        document.getElementById("checkGuess").disabled = false
        document.getElementById("restart").disabled = false

        randNum = Math.floor(Math.random() * max) + 1
    }
}

document.getElementById("checkGuess").onclick = function(){
    guessValue = document.getElementById("guess").value
    if (guessValue > max || guessValue < 1){
        document.getElementById("tOrF").innerHTML = "Not a valid response"
        guessNum++
    }else if (guessValue > randNum){
        document.getElementById("tOrF").innerHTML = "Too much"
        guessNum++
    }else if (guessValue < randNum){
        document.getElementById("tOrF").innerHTML = "Too low"
        guessNum++
    }else{
        document.getElementById("tOrF").innerHTML = `Correct! The amount of guesses: ${guessNum}`
        guessNum = 0
        document.getElementById("numberGuessMax").disabled = false
        document.getElementById("numberGuessStart").disabled = false
        document.getElementById("guess").disabled = true
        document.getElementById("checkGuess").disabled = true
        document.getElementById("restart").disabled = true
    }
}
document.getElementById("restart").onclick = function(){
    document.getElementById("tOrF").innerHTML = "Restarted!"
    guessNum = 0
    document.getElementById("numberGuessMax").disabled = false
    document.getElementById("numberGuessStart").disabled = false
    document.getElementById("guess").disabled = true
    document.getElementById("checkGuess").disabled = true
    document.getElementById("restart").disabled = true
}