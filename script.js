//fetching data
async function fetchData() {
  let load = document.getElementById("loading");
  load.style.display = "block";

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
    
    if(data.Response === "False"){
      load.textContent = "Movie/Series not found.";
      display.style.display = "none"
    }

    load.style.display = "none";

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

    const MGEN = data.Genre;
    let gen = document.getElementById("genera");
    gen.textContent = `Genre: ${MGEN}`;

    const MRATE = data.imdbRating;
    let rating = document.getElementById("rate");
    rating.textContent = `IMBD Rating: ${MRATE}`;

    if(MRATE >= 5){
      let time = document.querySelector(".time")
      time.style.color = "green"
    }else{
      time.style.color = "orange";
    }



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

// added enter functionality
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    fetchData();
    userInput.value = ""; //clearing the input
  }
});
