
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
            t.title = "dnkfhbsajkhegdjhwneiouhkiyhjuki"
            break
        case 2:
            t.title = "i heard that shit bruh"
            break
        case 3:
            t.title = "switching up on my day1s i js got that 7k check from big yahu"
            break
        case 4:
            t.title = "killer queen has already touched this tab"
            break
        case 5:
            t.title = "son im crine😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭😭"
            break
        case 6:
            t.title = "never underestimate the power of muhammed awais"
            break
        case 7:
            t.title = "(randNum == 7) = true"
            break
        case 8:
            t.title = "rigorous attention to detail"
            break
        case 9:
            t.title = "t.title = 't.title = 't.title = ...'' "
            break
        case 10:
            t.title = "no vibes here"
            break
        default:
            t.title = "error"
            break
    }
}, 5000);
