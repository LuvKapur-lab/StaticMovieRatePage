// https://www.omdbapi.com/?t=spiderman&apikey=13f8be2c

//fetching data
async function fetchData() {
  try {
    let movieName = userInput.value.trim().toLowerCase();

    let response = await fetch(
      `https://www.omdbapi.com/?t=${movieName}&apikey=13f8be2c`
    );
    if (!response.ok) {
      throw new Error("Could not fetch the data");
    }
    const data = await response.json();
    console.log(data);

    const MIMG = data.Poster;
    let poster = document.getElementById("movieImg");
    poster.src = MIMG;
    poster.style.display = "block";

    let display = document.querySelector(".display");
    display.style.display = "flex";

    const MTITLE = data.Title;
    let title = document.getElementById("movieName");
    title.textContent = MTITLE;

    const MPLOT = data.Plot;
    let desc = document.getElementById("movieDis");
    desc.textContent = MPLOT;

    const MRUN = data.Runtime;
    let runtime = document.getElementById("runtime");
    runtime.textContent = `Duration: ${MRUN}`;

    const MGEN = data.Genre
    let gen = document.getElementById("genera");
    gen.textContent = `Genre: ${MGEN}`

    const MRATE = data.imdbRating;
    let rating = document.getElementById("rate");
    rating.textContent = `IMBD Rating: ${MRATE}`;
  } catch (error) {
    console.error(error);
  }
}

//grabbing the elements
let search = document.getElementById("searchBtn");
let userInput = document.getElementById("inputField");
let displayData = document.getElementById("display");
let displayDataLeft = document.querySelector(".displayLeft");

search.addEventListener("click", function () {
  fetchData();
  userInput.value = ""; //clearing the input
});
