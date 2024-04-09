function appendToDisplay(input){
    document.getElementById("display").value += input
}
function clearDisplay(){
    document.getElementById("display").value = ""
}
function calculate(){
    try{
        
        document.getElementById("display").value = eval(document.getElementById("display").value)

        if (document.getElementById("display").value == "NaN"){
            document.getElementById("display").value = "no / 0 for you"
        }

        if (document.getElementById("display").value == "undefined"){
            document.getElementById("display").value = "u didnt write anything"
        }

    }catch(error){

        document.getElementById("display").value = "Error"
    
    }
}
