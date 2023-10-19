import { useEffect,useState} from 'react'
import axios from "axios";

const apiKey = process.env.REACT_APP_TMDB_API_KEY; 
const minVoteCount = 100; 

const Movies = ({ activeGenres }) => {
  const [years, setYears] = useState([]);
  const [moviesByYear, setMoviesByYear] = useState({});
  const currentYear = new Date().getFullYear();
  //console.log("activeGenres = ",activeGenres); 
  //console.log(typeof(activeGenres))

  useEffect(() => {
    // Create an array of years from 2012 to the current year
    const yearsArray = Array.from(
      { length: currentYear - 2011 },
      (_, index) => 2012 + index
    );
    //console.log("yearsArray",yearsArray)
    setYears(yearsArray);

    // Load movies for all years
    yearsArray.forEach((year) => loadMovies(year));
  }, [activeGenres]);
 

  const loadMovies = async (year) => {
    const separator = ','
    const genresQueryParam = activeGenres.join(separator); //activeGenres.join(',')
    //console.log("genresQueryParam = ",genresQueryParam);
    try {
      const response = await axios.get( 
        `https://api.themoviedb.org/3/discover/movie`,
        {
          params: {
            api_key: apiKey,
            sort_by: "popularity.desc",
            primary_release_year: year,
            vote_count: minVoteCount,
            page: 1,
            with_genres: genresQueryParam,
          },
        }
      );
      //console.log("API Response:", response)
      //console.log("URL",`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&vote_count=${minVoteCount}&sort_by=popularity.desc&primary_release_year=${year}&page=1&with_genres=${genresQueryParam}`)
      setMoviesByYear((prevMovies) => ({
        ...prevMovies,
        [year]: response.data.results,
      }));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div  className='movie'>
      <h1>Movies</h1>
      <div id="movie-list" className="movie-list">
        {years.map((year) => (
          <div key={year} className="year-movies">
            <h2>Year {year}</h2>
            <div className="movie-list">
              {moviesByYear[year] &&
                moviesByYear[year].map((movie) => (
                  <div key={movie.id} className="movie-card">
                    <img
                      className="movie-poster"
                      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      alt={movie.title}
                    /> 
                    <div className="movie-details">
                      <h2 className="movie-title">{movie.title}</h2>
                      <p className="movie-release-date">
                        Released: {movie.release_date}
                      </p>
                      <p className="movie-overview">{movie.overview}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movies