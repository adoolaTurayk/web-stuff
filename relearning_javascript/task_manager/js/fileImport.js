export function readPromiseCreate(file) {
    const reader = new FileReader();

    return new Promise((res, rej) => {
        reader.onload = (e) => res(e.target.result);
        reader.onerror = () => rej("Cannot read file: " + reader.error);

        reader.readAsText(file);
    });
}