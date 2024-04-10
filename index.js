let randNum;
const t = document;

setInterval(() => {
    randNum = Math.floor(Math.random() * 10) + 1
    console.log(randNum)

    switch(randNum){
        case 1:
            t.title = "hello welcome"
            break
        case 2:
            t.title = "the project place thing"
            break
        case 3:
            t.title = "where you can see my things"
            break
        case 4:
            t.title = "i like this website"
            break
        case 5:
            t.title = "welcome hello"
            break
        case 6:
            t.title = "pseudo random my ahh"
            break
        case 7:
            t.title = "(randNum == 7) = true"
            break
        case 8:
            t.title = "css is shi"
            break
        case 9:
            t.title = "t.title = 't.title = 't.title = ...'' "
            break
        case 10:
            t.title = "hello hello"
            break
        default:
            t.title = "error"
            break
    }
}, 5000);