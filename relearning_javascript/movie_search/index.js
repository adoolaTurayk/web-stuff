const apiKey = 'c7d838c0253babcb97bab576572fa330';
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;
const label = document.getElementById("index");
let data;
let fullResults;
let count;
let moviesInOnePage = 6;
let pageAmount;

window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#first,#prev,#next,#last")
        .forEach(button => button.disabled = true);
});

function startSearch(){
    const query = document.getElementById("movie").value.trim();
    if (!query) return;
    search(query);
}

function pageCounter(){
    let c = 0;

    function reset(){
        c = 0;
        displayData(c);
        displayToLabel()
    }
    function increment(){
        if (c < pageAmount - 1) {
            c++;
            displayData(c);
            displayToLabel()
        }
    }
    function decrement(){
        if (c > 0) {
            c--;
            displayData(c);
            displayToLabel()
        }
    }
    function max(){
        c = pageAmount - 1;
        displayData(c);
        displayToLabel()
    }

    function displayToLabel(){
        label.textContent = `${c + 1} / ${pageAmount}`
    }
    
    return {increment, decrement, reset, max};
}

async function search(query) {
    fullResults = [];

    try {
        let apiPage = 0;
        let done = false;

        do {

            apiPage++;

            let response = await fetch(apiUrl + `&query=${encodeURIComponent(query)}&page=${apiPage}`);

            if (!response.ok) {
                throw new Error(`Failed to fetch movie data. Status: ${response.status}`);
            }

            data = await response.json();
            fullResults.push(...data.results);

            if (apiPage == data.total_pages || apiPage == 5){
                done = true;
            }

        } while (!done)

        if (fullResults.length === 0) {
            label.textContent = "0 / 0";
            return;
        }

    } catch (error) {
        console.error(error);
    }

    pageAmount = Math.ceil(fullResults.length / moviesInOnePage);

    count = pageCounter();
    count.reset();

    document.querySelectorAll("#first,#prev,#next,#last")
    .forEach(b => b.disabled = false);

    console.log(fullResults);
}

function displayData(index){
    let container = document.getElementById("results");

    const imageBase = "https://image.tmdb.org/t/p/w200";

    container.innerHTML = "";
    
    let lastResult = ((index + 1) * moviesInOnePage);

    let pageResults = fullResults.slice(lastResult - moviesInOnePage, lastResult);
    
    pageResults.forEach((result) => {
        let year = result.release_date ? new Date(result.release_date).getFullYear() : "N/A";

        container.innerHTML += `
        <div class="info-container">
            <h1>${result.original_title + ` (${year})`}</h1>
            <p class="release">${`Release date: ${result.release_date}`}</p>
            <span class="rating">${`⭐ Rating: ${result.vote_average} / 10`}</span>
            <img src="${result.poster_path ? imageBase + result.poster_path : ""}">
            <p>${result.overview}</p>
        </div>
    `
    })
}

document.addEventListener("keydown", (event) => {
    if (!count) return;
        
    if (event.key === "ArrowRight" && event.shiftKey){
        event.preventDefault();
        count.max();
    }

    if (event.key === "ArrowLeft" && event.shiftKey){
        event.preventDefault();
        count.reset();
    }

    if (event.key === "ArrowRight") {
        event.preventDefault();
        count.increment();
    }

    if (event.key === "ArrowLeft") {
        event.preventDefault();
        count.decrement();
    }
});

document.getElementById("movie").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        startSearch();
    }
});