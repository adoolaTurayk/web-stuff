let twelveHour = document.getElementById("twelvehours");

function clockUpdate(){
    const date = new Date;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDay();
    let ampm = "";
    if (twelveHour.checked){
        ampm = hours >= 12 ? " PM" : " AM";
        hours = hours % 12 || 12;
    }
    const timeString = `${hours.toString().padStart(2, 0)}:${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}${ampm}`
    switch(day){
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        default:
            day = "What the fuck"
            break;
    }
    document.getElementById("time").textContent = timeString;
    document.getElementById("day").textContent = day;
    document.getElementById("date").textContent = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

clockUpdate();
setInterval(clockUpdate, 100)