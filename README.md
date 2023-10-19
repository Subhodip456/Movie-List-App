# Movie-List-App
Its Movie information app that displays a list of movies from The Movie Database (TMDb) API. The app shows top movies for each year and users can filter by genre, the app also loads top movies from previous / next years as the user scrolls through the list.

# Requirements
# Covered
Fetch and display a list of movies from TMDb API.
Filter movies by genre.
Load movies for specific years.
Create a user interface to select genres for filtering.
Smooth scrolling behavior to load more movies.
Sort movies by popularity.
Display movie details such as title, release date, and overview.

# Not Covered
User authentication and user-specific movie lists.
User registration and management.
Database integration for storing user data and movie preferences.
Additional features like favoriting, rating, or reviewing movies.
Comprehensive error handling for all API requests.

# Project Structure
The project structure includes the following components:

App.js: The main application component that manages the state for active genres and renders the Navbar and Scroller components.

Navbar.jsx: The component responsible for displaying genre filter buttons and fetching genre data from the TMDb API.

Scroller.jsx: A scrollable container component for rendering movies based on the selected genres.

Movies.jsx: Fetches and displays movies, organizes them by release year, and filters them by genres.

# How to Run the Project
To run this project on your local machine, follow these steps:

1) Clone this repository to your local machine:
git clone https://github.com/Subhodip456/Movie-List-App.git

2) Navigate to the project directory:
   cd Movie-List-App/frontend

3) Install the project dependencies:
   npm install

4)Get a TMDb API key from https://developer.themoviedb.org/reference/discover-movie  Or Login/Sign-UP to TMDB website https://www.themoviedb.org/login?to=read_me&redirect=%2Freference%2Fdiscover-movie

5)Create a .env file in the project root directory and add your TMDb API key:
REACT_APP_TMDB_API_KEY=your-api-key

6)Start the development server:
npm start

7)Open your web browser and navigate to http://localhost:3000 to use the Movie-List-App.

# Project-Dependencies
React: A JavaScript library for building user interfaces.
Axios: A popular HTTP client for making API requests.
react-scroll-to-bottom: A library for smooth scrolling.




