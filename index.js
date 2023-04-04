// Get references to the relevant DOM elements
const posterElem = document.querySelector("#poster");
const titleElem = document.querySelector("#title");
const runtimeElem = document.querySelector("#runtime");
const showtimeElem = document.querySelector("#showtime");
const availableTicketsElem = document.querySelector("#available-tickets");
const buyTicketButton = document.querySelector("#buy-ticket");
const filmsListElem = document.querySelector("#films");

// Function to display movie details on the page
function displayMovieDetails(movieData) {
  // Set the movie details based on the data returned from the server
  posterElem.src = movieData.poster;
  titleElem.textContent = movieData.title;
  runtimeElem.textContent = `Runtime: ${movieData.runtime} minutes`;
  showtimeElem.textContent = `Showing at: ${movieData.showtime}`;
  const availableTickets = movieData.capacity - movieData.tickets_sold;
  availableTicketsElem.textContent = `Available tickets: ${availableTickets}`;

  // Disable the buy ticket button if there are no available tickets
  if (availableTickets === 0) {
    buyTicketButton.disabled = true;
    buyTicketButton.textContent = "Sold Out";
  } else {
    buyTicketButton.disabled = false;
    buyTicketButton.textContent = "Buy Ticket";
  }
}

// Function to display list of movies on the page
function displayMoviesList(moviesData) {
  // Clear the existing films list
  filmsListElem.innerHTML = "";

  // Loop through the movie data and add a new list item for each movie
  moviesData.forEach((movieData) => {
    const filmItemElem = document.createElement("li");
    filmItemElem.classList.add("film", "item");
    filmItemElem.textContent = movieData.title;
    filmItemElem.addEventListener("click", () => {
      // When a movie is clicked, display its details on the page
      displayMovieDetails(movieData);
    });
    if (movieData.capacity - movieData.tickets_sold === 0) {
      filmItemElem.classList.add("sold-out");
    }
    filmsListElem.appendChild(filmItemElem);
  });
}

// Make a GET request to retrieve the first movie's details
fetch("http://localhost:3000/films/1")
  .then((response) => response.json())
  .then((movieData) => {
    // Display the first movie's details on the page
    displayMovieDetails(movieData);
  });

// Make a GET request to retrieve the list of movies
fetch("http://localhost:3000/films")
  .then((response) => response.json())
  .then((moviesData) => {
    // Display the list of movies on the page
    displayMoviesList(moviesData);
  });

// Add a click event listener to the buy ticket button
buyTicketButton.addEventListener("click", () => {
  // When the buy ticket button is clicked, decrease the available tickets by 1
  const currentAvailableTickets = parseInt(
    availableTicketsElem.textContent.split(":")[1]
  );
  if (currentAvailableTickets > 0) {
    availableTicketsElem.textContent = `Available tickets: ${
      currentAvailableTickets - 1
    }`;
    if (currentAvailableTickets - 1 === 0) {
      buyTicketButton.disabled = true;
      buyTicketButton.textContent = "Sold Out";
      const currentMovieTitle = titleElem.textContent;
      const filmsList = Array.from(filmsListElem.children);
      const movieItem = filmsList.find(
        (elem) => elem.textContent === currentMovieTitle
      );
      movieItem.classList.add("sold-out");
    }
  }
});
