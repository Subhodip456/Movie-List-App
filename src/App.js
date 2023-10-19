import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Scroller from './components/Scroller';


function App() {
  const [activeGenres, setActiveGenres] = useState([]);

  return (
    <div className="App">
      <Navbar onGenreFilter={setActiveGenres} />
      <Scroller activeGenres={activeGenres} />
    </div>
  );
}

export default App;
