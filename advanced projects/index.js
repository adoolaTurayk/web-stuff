document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.shiftKey) {
        let randNum = Math.floor(Math.random() * 10) + 1;
        switch (randNum) {
            case 1:
                console.log("User loves to press Shift+Enter.");
                break;
            case 2:
                console.log("User seems to have pressed Shift+Enter.");
                break;
            case 3:
                console.log("User has exhibited signs of life.");
                break;
            case 4:
                console.log("User used SHIFT+ENTER. It is not effective.");
                break;
            case 5:
                console.log("User attempted to \\n");
                break;
            case 6:
                console.log("User is very lucky. There is a 1/10 chance of this string being printed.");
                break;
            case 7:
                console.log("User seems to have observed the code.");
                break;
            case 8:
                console.log("User must watch JoJo's.");
                break;
            case 9:
                console.log("The maker of this code has ran out of ideas.");
                break;
            case 10:
                console.log("Is User reading this?");
                break;
            default:
                console.log("Error");
                break;
        }
    }
})