setInterval(() => {
    let currentTime = new Date();
    let hours = currentTime.getHours()
    const meridiem = hours >= 12 ? "PM" : "AM"
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0)
    let currentTimeOnly  = (`${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()}`);
    let currentDate = (`${hours}:${currentTime.getMinutes().toString().padStart(2, 0)}:${currentTime.getSeconds().toString().padStart(2, 0)} ${meridiem}`);
    let currentDayOfWeek = currentTime.getDay();

    document.getElementById("date").textContent = currentTimeOnly;
    document.getElementById("time").textContent = currentDate;
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
            document.getElementById("day").textContent = "???? Tf did you do";
            break;
    }
    
}, 1000); // Run updateTime() every second
