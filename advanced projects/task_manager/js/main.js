import { readPromiseCreate } from "./fileImport.js";
import { checkObjValidity } from "./validate.js";
import { displayData } from "./display.js";

let tasks = [];

async function importTasks() {
    const input = document.getElementById("import");
    
        input.addEventListener("change", async (e) => {
            try {
                const file = e.target.files[0];
                e.target.value = "";
                if (!file) throw new Error("No file selected");
                if (!file.name.endsWith(".json")) throw new Error ("Wrong file format");

                const parsedData = JSON.parse(await readPromiseCreate(file));
                const { valid, errorMessage } = await checkObjValidity(parsedData);

                if (!valid) throw new Error("Invalid JSON: " + JSON.stringify(errorMessage));

                tasks = parsedData;
                console.log("Imported.");

                displayData(tasks);
            }
            catch (error) {
                console.error(error);
            }
        })
}

document.getElementById("submit").onclick = async () => {
    try {
        const taskInput = document.getElementById("taskInput").value;
        const dateInput = document.getElementById("dateInput").value;
        const timeInput = document.getElementById("timeInput").value;
        
        let tasksTemp = [];
        
        if (!(taskInput && typeof taskInput === "string") && taskInput.trim()) 
            throw new Error("Invalid Task Input");
        else if (!dateInput && timeInput)
            throw new Error("Time present but not Date");
        
        tasksTemp.push({
            "body": taskInput,
            "date": dateInput ? dateInput : null,
            "time": timeInput ? timeInput + ":00" : null,
            "finished": false
        });

        const { valid, errorMessage } = await checkObjValidity(tasksTemp);
    
        if (!valid) throw new Error(JSON.stringify(errorMessage));

        tasks.push(tasksTemp[0]);

        displayData(tasks);
    } catch (error) {
        console.error(error);
    }
}

export async function setTasks(newTasks) {
    newTasks = tasks;
    displayData(tasks);
}

export function getTasks() {
    return tasks;
}

importTasks();