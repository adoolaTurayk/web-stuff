console.log("Hello World!")

window.alert("WEEEEEEEE WOOOOOOOO WEEEEEEEEEEE WOOOOOOO")
let name = window.prompt("what shall you replace this h1 teg with")

let avUttpMemAge = 3
let e
let uName = "adoola"

console.log(avUttpMemAge)

e = 5.22

console.log(e)

function addingNumber(a, b){
    return a + b;
}

let sum = addingNumber(e, avUttpMemAge)

console.log(sum)

console.log("hello, ", uName)

document.getElementById("h1A").innerHTML = name

let username;

document.getElementById("mybutton").onclick = function(){
    username = document.getElementById("name").value
    console.log(username)
}

document.getElementById("myOtherButton").onclick = function(){
    let num1 = Number(document.getElementById("arithNum1").value)
    let num2 = Number(document.getElementById("arithNum2").value)
    let operator = document.getElementById("operSelect").value
    let ansSpace = document.getElementById("Answer")
    let ans;

    switch(operator) {
        case "Select One":
            ansSpace.innerHTML = "ERROR"
            break
        case "+":
            ans = num1 + num2
            ansSpace.innerHTML = ans
            break
        case "-":
            ans = num1 - num2
            ansSpace.innerHTML = ans
            break
        case "*":
            ans = num1 * num2
            ansSpace.innerHTML = ans
            break
        case "/":
            ans = num1 / num2
            ansSpace.innerHTML = ans
            break
        case "%":
            ans = num1 % num2
            ansSpace.innerHTML = ans
            break
        default:
            ansSpace.innerHTML = "ERROR wtf did u do"
            break
    }

    //why did this take so long to make

}

document.getElementById("decrease").onclick = function(){
    let numberLabel = Number(document.getElementById("numberLabel").innerHTML)

    numberLabel-=1

    document.getElementById("numberLabel").innerHTML = numberLabel
}
document.getElementById("increase").onclick = function(){
    let numberLabel = Number(document.getElementById("numberLabel").innerHTML)

    numberLabel+=1

    document.getElementById("numberLabel").innerHTML = numberLabel
}
document.getElementById("reset").onclick = function(){
    let numberLabel = Number(document.getElementById("numberLabel").innerHTML)

    numberLabel=0

    document.getElementById("numberLabel").innerHTML = numberLabel
}
document.getElementById("rngButton").onclick = function(){
    let maxNum = Number(document.getElementById("maxNum").value)
    let rng = Math.floor(Math.random() * maxNum) + 1

    document.getElementById("rngButton").innerHTML = rng
}

class Idiots{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    beIdiot(){
        console.log("i am being an idiot right now")
    }
    saySomething(theThing){
        console.log(theThing)
    }
}
const idiot1 = new Idiots("omar", 10)
const idiot2 = new Idiots("ali", 8)

idiot2.saySomething("eeeeeeeeeee")

let array = [-2, -7, -3, 2, 4, 6]
array.sort()
console.log(array)

/*
comment
*/

//comment