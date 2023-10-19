import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './component.css';

const Navbar = ({ onGenreFilter }) => {
  const [activeButtons, setActiveButtons] = useState([]);
  const [genres, setGenres] = useState([]);

  // Fetch and set genres
  useEffect(() => {
    async function fetchGenres() {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/genre/movie/list',
          {
            params: {
              api_key: '2dca580c2a14b55200e784d157207b4d',
            },
          }
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    }
    fetchGenres();
  }, []);

  const handleButtonClick = (genreId) => {
    let updatedActiveButtons;
    if (activeButtons.includes(genreId)) {
      updatedActiveButtons = activeButtons.filter((id) => id !== genreId);
    } else {
      updatedActiveButtons = [...activeButtons, genreId];
    }
    setActiveButtons(updatedActiveButtons);
    //console.log("updatedActiveButtons = ",updatedActiveButtons)
    // Pass the selected genre IDs to the parent component
    onGenreFilter(updatedActiveButtons);
  };

  return (
    <div className="navbar-bar">
      <div className="navbar-bar-title">MOVIEFIX</div>
      <button
        className={`navbar-bar-button ${activeButtons.length === 0 ? 'active-button' : ''}`}
        onClick={() => handleButtonClick(null)}
      >
        All
      </button>
      {genres.map((genre) => (
        <button
          key={genre.id}
          className={`navbar-bar-button ${activeButtons.includes(genre.id) ? 'active-button' : ''}`}
          onClick={() => handleButtonClick(genre.id)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default Navbar;