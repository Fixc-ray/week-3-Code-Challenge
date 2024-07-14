const movie = 'http://localhost:3000/films'

fetch(movie)
.then(res => res.json())
.then(films => films.forEach(film => createFilm(film)))

function createFilm(film) {
    const {poster, id, title, description, tickets, showtime, capacity, runtime} = film
    const wrapper = document.getElementById('movie-list')
    const divCard = document.createElement('div')
    divCard.className = 'film'


    const html = `
    <img src="${poster}" alt="">
    <p>${id}</p>
    <h2>${title}</h2>
    <p>${description}</p>
    <p>Movie will show at ${showtime}</p>
    <p>Maximum Capacity ${capacity} people</p>
    <p>Movie will run for ${runtime} minutes</p>`

    divCard.innerHTML = html
    wrapper.appendChild(divCard)
}

form.addEventListener("submit", (e) => console.log(e))