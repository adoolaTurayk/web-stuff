setInterval(() => {
    let currentTime = new Date();
    let currentTimeOnly  = (`${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()}`);
    let currentDate = (`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`);
    let currentDayOfWeek = currentTime.getDay();

    document.getElementById("time").innerHTML = currentTimeOnly;
    document.getElementById("date").innerHTML = currentDate;
    switch(currentDayOfWeek){
        case 0:
            document.getElementById("day").innerHTML = "Sunday";
            break;
        case 1:
            document.getElementById("day").innerHTML = "Monday";
            break;
        case 2:
            document.getElementById("day").innerHTML = "Tuesday";
            break;
        case 3:
            document.getElementById("day").innerHTML = "Wednesday";
            break;
        case 4:
            document.getElementById("day").innerHTML = "Thursday";
            break;
        case 5:
            document.getElementById("day").innerHTML = "Friday";
            break;
        case 6:
            document.getElementById("day").innerHTML = "Saturday";
            break;
        default:
            document.getElementById("day").innerHTML = "something's wrong";
            break;
    }
    
}, 1000); // Run updateTime() every second
