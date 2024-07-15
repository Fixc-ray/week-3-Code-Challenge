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

  const html = `<h2>${title}</h2>`;

  divCard.addEventListener("click", pulldata);

  function pulldata(images) {
    const content = document.createElement('div')

    const html = `
    <img src="${poster}" alt="">
    <p>${description}</p>
    <p>Movie will show at ${showtime}</p>
    <p>Maximum Capacity ${capacity} people</p>
    <p>Movie will run for ${runtime} minutes</p>
    <p>Available Tickets: <span id="tickets-${id}">${availableTickets} </span></p>
    <button id="Buy-${id}">${
      availableTickets === 0 ? "Sold Out" : "Buy Ticket"
    }</button>`;

    divCard.innerHTML = html;
  }

  divCard.innerHTML = html;
  wrapper.appendChild(divCard);
}
