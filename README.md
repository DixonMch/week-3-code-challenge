# week-3-code-challenge
Movie Theater App
This is a web application for a movie theater that allows users to view the details of each movie, see all available movies, and buy tickets.

Installation
To run this app locally, clone the repository and open the index.html file in your preferred web browser.

bash
Copy code
git clone https://github.com/DixonMch/movie-theater-app.git
cd movie-theater-app
open index.html
Usage
Upon loading the page, users will see the details of the first movie, including the movie poster, title, runtime, showtime, and available tickets. The available tickets are calculated by subtracting the number of tickets sold from the theater's capacity. Users can also see a menu of all movies on the left side of the page in the ul#films element.

To buy a ticket, users can click the "Buy Ticket" button, which will decrease the number of available tickets displayed on the page. If the showing is sold out (i.e., there are 0 tickets available), users will not be able to buy a ticket.

If a user clicks on a movie in the menu, the details of the selected movie will replace the currently displayed movie's details.

Bonus Features
There are two bonus features included in this app:

When a movie is sold out, the button text will change to "Sold Out", and the film item in the ul#films menu will have a class of sold-out.

The movie poster size has been decreased, and the app has been styled to improve the overall user experience.

Technologies Used
This app was built using HTML, CSS, and JavaScript. 

API
This app uses the following API endpoints:

GET http://localhost:3000/films - retrieves a list of all movies
GET http://localhost:3000/films/1 - retrieves the details of the first movie
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

License
This project is licensed under the Dixon License.