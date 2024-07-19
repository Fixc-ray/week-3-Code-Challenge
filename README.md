# Wk3 Code Challenge
## Introduction

Flatdango is a simple and interactive web application that allows users to browse and purchase movie tickets. The app displays a list of movies and their details fetched from a local JSON server. Users can view movie details and buy tickets, with the number of available tickets decreasing as purchases are made.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [JSON Server](https://github.com/typicode/json-server)

## Installation

1. Clone the repository:
    ```sh
    git clone   https://github.com/Fixc-ray/week-3-Code-Challenge.git
    ```
2. Navigate into the project directory:
    ```
    cd flatdango
    ```
 
3. Open `index.html` in your browser to view the application.


## usage

1. When the page loads, a list of movies is displayed on the left side of the screen.
2. When you click on a movie title, it displays the movie content including (Movie poster, runtime, number of tickets available,)
2. Users can buy tickets by clicking the "Buy Ticket" button. The number of available tickets will decrease accordingly. If the movie is sold out, the button will be disabled and display "Sold Out".

## Core Features

- Display the first movie's details when the page loads.
- Allow users to buy tickets for a movie and update the available tickets count.
- Indicate when a movie is sold out.


## Future Improvements

- Add persistence to the ticket purchase feature.
- Implement a search functionality to find movies quickly.
- Add user authentication for personalized experience.
- Add feature to display one movie at a time

## License
This project is licensed under the MIT License.

## Deployed link
https://week-3-code-challenge-umber.vercel.app/
