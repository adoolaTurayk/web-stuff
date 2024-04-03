
const textBox = document.getElementById("tempInput")
const fahrenheitRadio = document.getElementById("radio1F")
const celsiusRadio = document.getElementById("radio2C")
const result = document.getElementById("result")
let temp

document.getElementById("submit").onclick = function(){
    if(fahrenheitRadio.checked){

        temp = Number(textBox.value)
        temp = temp * 9 / 5 + 32
        result.textContent = temp.toFixed(1) + "°F"
    
    }else if(celsiusRadio.checked){
        
        temp = Number(textBox.value)
        temp = (temp - 32) * (5/9)
        result.textContent = temp.toFixed(1) + "°C"
    
    }else{

        result.textContent = "Select a unit"
    
    }
}