
let randNum;
const t = document;

if (navigator.userAgent.match(/Mobile/)) {
    document.getElementById('changeMe').innerHTML = "if you're on mobile i suggest you turn on desktop view it is very recommended";
}

setInterval(() => {
    randNum = Math.floor(Math.random() * 10) + 1
    console.log(randNum)

    switch(randNum){
        case 1:
            t.title = "Dang bro"
            break
        case 2:
            t.title = "i heard that shit bruh"
            break
        case 3:
            t.title = "labubu dubai chocolate matcha"
            break
        case 4:
            t.title = "Dih"
            break
        case 5:
            t.title = "welcome hello"
            break
        case 6:
            t.title = "Free robux 🤑🤑🤑🤑"
            break
        case 7:
            t.title = "(randNum == 7) = true"
            break
        case 8:
            t.title = "Mango Mustard 😈🥭🥭"
            break
        case 9:
            t.title = "t.title = 't.title = 't.title = ...'' "
            break
        case 10:
            t.title = "Do you copy"
            break
        default:
            t.title = "error"
            break
    }
}, 5000);