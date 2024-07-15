# Flatdango
Flatdango is an application that allows users to purchase movie tickets from the theater. This project fetches data from a local JSON server and displays movie details, a list of movies, and allows users to purchase tickets.
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
    ```sh
    cd flatdango
    ```

3. Install the necessary packages:
    ```sh
    npm install json-server
    ```

4. Start the JSON server:
    ```sh
    npx json-server --watch db.json
    ```

5. Open `index.html` in your browser to view the application.

## Usage

1. When the page loads, the details of the first movie are displayed, including its poster, title, runtime, showtime, and available tickets.
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

## Deployed Code
https://week-3-code-challenge-silk.vercel.app/
