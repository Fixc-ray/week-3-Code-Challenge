const movie = "http://localhost:3000/films";

fetch(movie)
  .then((res) => res.json())
  .then((films) => films.forEach((film) => createFilm(film)));

function createFilm(film) {
  const {
    poster,
    id,
    title,
    description,
    tickets_sold,
    showtime,
    capacity,
    runtime,
  } = film;
  const wrapper = document.getElementById("movie-list");
  const divCard = document.createElement("div");
  const availableTickets = capacity - tickets_sold;
  const button = document.getElementById("Buy-${id}");

  divCard.className = "film";

  const html = `
    <img src="${poster}" alt="">
    <p>${id}</p>
    <h2>${title}</h2>
    <p>${description}</p>
    <p>Movie will show at ${showtime}</p>
    <p>Maximum Capacity ${capacity} people</p>
    <p>Movie will run for ${runtime} minutes</p>
    <p>Available Tickets: <span id="tickets-${id}">${availableTickets} </span></p>
    <button id="Buy-${id}" ${availableTickets === 0 ? "disabled" : ""}>${
    availableTickets === 0 ? "Sold Out" : "Buy Ticket"
  }</button>`;


  const list = document.getElementById("side-list")
  const sidebar = `<h2>${title}</h2>`
  const sideDiv = document.createElement("div")

  sideDiv, (innerHTML = sidebar);
  list.appendChild(sideDiv);

  divCard.innerHTML = html;
  wrapper.appendChild(divCard);


}
