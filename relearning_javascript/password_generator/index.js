const len = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const numm = document.getElementById("num");
const symbol = document.getElementById("symbol");
const passplace = document.getElementById("password");

let arrayUpper = ["A","B","C","D","E","F","G","H",
                  "I","J","K","L","M","N","O","P",
                  "Q","R","S","T","U","V","W","X",
                  "Y","Z"];
let arrayLower = ["a","b","c","d","e","f","g","h",
                  "i","j","k","l","m","n","o","p",
                  "q","r","s","t","u","v","w","x",
                  "y","z"];
let arrayNum = ["1","2","3","4","5","6","7","8",
                  "9","0"];
let arraySymbol = ["!","@","#","$","%","^","&","*",
                  "(",")","-","_","+","="];

function generate(){
    let length = len.value;
    let includeUpper = upper.checked;
    let includeLower = lower.checked;
    let includeNum = numm.checked;
    let includeSymbols = symbol.checked;
    let password = "";
    let allowedChars = [];

    if (includeUpper){
        allowedChars.push(...arrayUpper);
    }
    if (includeLower){
        allowedChars.push(...arrayLower);
    }
    if (includeNum){
        allowedChars.push(...arrayNum);
    }
    if (includeSymbols){
        allowedChars.push(...arraySymbol);
    }

    console.log(allowedChars);

    for(let i = 0; i < length; i++){
        let randNum = Math.floor(Math.random() * allowedChars.length);
        let randChar = allowedChars[randNum];
        password += randChar;
    }

    passplace.textContent = password;
}