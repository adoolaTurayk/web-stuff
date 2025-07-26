function roll(){
    const diceResult = document.getElementById("resultText");
    const dice = document.getElementById("dice");

    let die = document.getElementById("diceNum").value;
    let images = [];
    let values = [];

    for(let i = 0; i < die; i++){
        let value = Math.floor((Math.random() * 6)) + 1;
        values.push(value);
        images.push(`<img src="images/${value}.png">`);
    }

    dice.innerHTML = images.join(" ");
    console.log(images.join(" "))
    diceResult.textContent = `Dice: ${values.join(", ")}`
    console.log(`Dice: ${values.join(", ")}`)
}