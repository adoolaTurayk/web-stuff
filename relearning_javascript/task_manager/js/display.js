export function displayData(tasks){
    const container = document.getElementById("container");
    let html = "";

    tasks.forEach((e, i) => {
        let task = e.body;
        let timestamp;
        let finishedText;

        let { date, time } = e;
        let timestampArray = [date, time].filter(Boolean);

        if (timestampArray.length === 2) timestamp = new Date(`${date}T${time}`);
        else if (timestampArray.length === 1 && date) timestamp = new Date(date);
        else timestamp = null;

        if (e.finished) finishedText = "Finished";
        else if (timestamp ? Date.now() > timestamp.getTime() : false) finishedText = "Missed";
        else finishedText = "Pending";

        const formattedDate = timestamp
            ? `${String(timestamp.getDate()).padStart(2, '0')}/${
               String(timestamp.getMonth() + 1).padStart(2, '0')
              }/${timestamp.getFullYear()}`
            : "";

        html += `
            <hr>
            <div class="taskContainer">
                <label class="taskText">${task}</label>
                ${timestamp ? `<label class="date">${formattedDate}</label>` : ""}
                ${time ? `<label class="time">${time}</label>` : ""}
                <label class="finished">${finishedText}</label>
                <div class="buttonContainer">
                    <div class="upDown">
                        <button class="moveUp" onclick="up(${i})">▲</button>
                        <button class="moveDown" onclick="down(${i})">▼</button>
                    </div>
                    <div class="controls">
                        <button class="deleteButton" onclick="deltsk(${i})">Delete</button>
                        <button class="finishToggle" onclick="finish(${i})">Finished</button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}