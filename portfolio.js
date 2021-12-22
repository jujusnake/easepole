const movie = document.querySelector(".btn-movie");
const theater = document.querySelector(".btn-theater");
const cf = document.querySelector(".btn-cf");

const movieList = document.querySelector(".movie");
const theaterList = document.querySelector(".theater");
const cfList = document.querySelector(".cf");

function activeMovie() {
  movie.classList.add("active");
  theater.classList.remove("active");
  cf.classList.remove("active");

  movieList.classList.add("selected");
  theaterList.classList.remove("selected");
  cfList.classList.remove("selected");
}

function activeTheater() {
  movie.classList.remove("active");
  theater.classList.add("active");
  cf.classList.remove("active");

  movieList.classList.remove("selected");
  theaterList.classList.add("selected");
  cfList.classList.remove("selected");
}

function activeCf() {
  movie.classList.remove("active");
  theater.classList.remove("active");
  cf.classList.add("active");

  movieList.classList.remove("selected");
  theaterList.classList.remove("selected");
  cfList.classList.add("selected");
}

movie.addEventListener("click", activeMovie);
theater.addEventListener("click", activeTheater);
cf.addEventListener("click", activeCf);
