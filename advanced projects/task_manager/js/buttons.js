import { setTasks, getTasks } from "./main.js";

let tasks;

window.up = (i) => {
    tasks = getTasks();
    if (tasks[i - 1]) [tasks[i], tasks[i - 1]] = [tasks[i - 1], tasks[i]];

    setTasks(tasks);
}

window.down = (i) => {
    tasks = getTasks();
    if (tasks[i + 1]) [tasks[i], tasks[i + 1]] = [tasks[i + 1], tasks[i]];

    setTasks(tasks);
}

window.deltsk = (i) => {
    tasks = getTasks();

    tasks.splice(i, 1);
    setTasks(tasks);
}

window.finish = (i) => {
    tasks = getTasks();

    tasks[i].finished = !tasks[i].finished;
    setTasks(tasks);
}

window.exportTasks = () => {
    let tasks = getTasks();
    const blob = new Blob([JSON.stringify(tasks, null, 2)], { type: "application/json" });

    const a = document.createElement("a");
    const url = URL.createObjectURL(blob);
    a.href = url;
    a.download = "tasks.json";

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}