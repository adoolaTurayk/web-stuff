function appendToDisplay(input){
    document.getElementById("display").value += input
}
function clearDisplay(){
    document.getElementById("display").value = ""
}
function calculate(){
    try{
        
        document.getElementById("display").value = eval(document.getElementById("display").value)

        if (document.getElementById("display").value == "Infinity"){
            document.getElementById("display").value = "Fuck you"
        }

        if (document.getElementById("display").value == "undefined"){
            document.getElementById("display").value = "Dude 💔💔"
        }

    }catch(error){

        document.getElementById("display").value = "Error"
    
    }
}
