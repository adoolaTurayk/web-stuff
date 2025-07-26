let max;
let attempts = 0;
let num;
let maxInput = document.getElementById("max");
let result = document.getElementById("result");
let beginButton = document.getElementById("begin");
let guess = document.getElementById("guess");
let check = document.getElementById("check");
let cancel = document.getElementById("cancel");
let cheat = false

function getRandomInt(max){
    return Math.floor(Math.random() * max + 1);
}

function start(){
    if (maxInput.value == "" || maxInput.value <= 0){
        result.textContent = "Please enter a positive number";
        return 0;
    }

    max = maxInput.value

    maxInput.disabled = true
    beginButton.disabled = true
    guess.disabled = false
    check.disabled = false
    cancel.disabled = false
    
    num = getRandomInt(max);

    if (cheat){
        result.textContent = `The maximum number is ${max} - Cheats On, Number: ${num}`
    }else{
        result.textContent = `The maximum number is ${max}`
    }
}

function checks(){
    if (guess.value == "" || Number(guess.value) > max || Number(guess.value) <= 0){
        result.textContent = "Please enter a number within the correct range";
        return 0;
    }

    attempts++;

    if (guess.value > num){
        result.textContent = `Too much, Attempts: ${attempts}`
    }
    else if (guess.value < num){
        result.textContent = `Too low, Attempts: ${attempts}`
    }
    else if (guess.value = num){
        result.textContent = `You won! Attempts: ${attempts}`
            
        maxInput.disabled = false
        beginButton.disabled = false
        guess.disabled = true
        check.disabled = true
        cancel.disabled = true

        attempts = 0;

        return 0;
    }
}

function cancels(){
    maxInput.disabled = false
    beginButton.disabled = false
    guess.disabled = true
    check.disabled = true
    cancel.disabled = true

    if (cheat){
        result.textContent = "Cheats ON"
    }
    else{
        result.textContent = "Begin"
    }

    attempts = 0;
}

function cheats(){
    cheat = cheat == false ? true : false

    if (cheat){
        maxInput.disabled = false
        beginButton.disabled = false
        guess.disabled = true
        check.disabled = true
        cancel.disabled = true

        result.textContent = "Cheats ON"
    }
}
