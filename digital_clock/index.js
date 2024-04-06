setInterval(() => {
    let currentTime = new Date();
    let currentTimeOnly  = (`${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()}`);
    let currentDate = (`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`);
    let currentDayOfWeek = currentTime.getDay();

    document.getElementById("time").textContent = currentTimeOnly;
    document.getElementById("date").textContent = currentDate;
    switch(currentDayOfWeek){
        case 0:
            document.getElementById("day").textContent = "Sunday";
            break;
        case 1:
            document.getElementById("day").textContent = "Monday";
            break;
        case 2:
            document.getElementById("day").textContent = "Tuesday";
            break;
        case 3:
            document.getElementById("day").textContent = "Wednesday";
            break;
        case 4:
            document.getElementById("day").textContent = "Thursday";
            break;
        case 5:
            document.getElementById("day").textContent = "Friday";
            break;
        case 6:
            document.getElementById("day").textContent = "Saturday";
            break;
        default:
            document.getElementById("day").textContent = "something's wrong";
            break;
    }
    
}, 1000); // Run updateTime() every second
