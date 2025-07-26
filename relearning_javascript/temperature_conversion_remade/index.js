let ctof = document.getElementById("ctof");
let ftoc = document.getElementById("ftoc");
let temp = document.getElementById("temperature");
let rslt = document.getElementById("rslt");

function convert(){
    if (ctof.checked){
        rslt.textContent = `${((Number(temp.value) * (9/5)) + 32).toFixed(2)}°F`
    }
    else if (ftoc.checked){
        rslt.textContent = `${((Number(temp.value) - 32) * (5/9)).toFixed(2)}°C`
    }
    else{
        rslt.textContent = "Please select a unit"
    }
}