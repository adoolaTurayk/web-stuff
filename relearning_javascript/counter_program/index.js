const num = document.getElementById("num");
let val = 0;

function decrement(){
    val--;
    num.textContent = val;
}

function reset(){
    val = 0;
    num.textContent = val;
}

function increment(){
    val++;
    num.textContent = val;
}