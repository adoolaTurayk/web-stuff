const display = document.getElementById("display");
const p1 = "(";
const p2 = ")";
let resultMode = false;

document.getElementById("clear").onclick = function(){
    display.value = "";
}

function evalate(operation){
    try{
        let result = eval(display.value);
        let rad = true;

        if (document.getElementById("rad").checked){
            rad = true;
            console.log("lol")
        }else{
            rad = false;
        }

        if (operation == "sin"){
            result = Math.sin(rad ? result : result * (Math.PI / 180));
        }
        else if(operation == "cos"){
            result = Math.cos(rad ? result : result * (Math.PI / 180));
        }
        else if(operation == "tan"){
            result = Math.tan(rad ? result : result * (Math.PI / 180));
        }
        else if(operation == "log"){
            result = Math.log10(result);
        }

        if (result == "Infinity"){
            display.value = "Division by 0 is not allowed"
            return 0;
        }

        display.value = result;
        resultMode = true;
    }
    catch(error){
        display.value = "Error";
        console.error(error);
        resultMode = true;
    }
}

function appendToDisplay(input){

    if (resultMode){
        display.value = "";
        resultMode = false;
    }
    display.value += input;
}
