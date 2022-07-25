import React, {useEffect, useState} from 'react';

const App = () => {

  const [movies, setMovies] = useState([]);

  async function fetchMovie() {
    const apiresponse = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=8081a26645ae034a7e21ff1d42432898');
    const jsonData = await apiresponse.json();
    const moviesData = jsonData.results;
    setMovies(moviesData);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="App">
      <h1>InstaPlay</h1>
      {movies ? (
        movies.map((movie,id) => (
          <div className='movies' key={id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.vote_average} / 10</p>
          </div>
        ))
      ): (
        <h2>No Movies</h2>
      )}
    </div>
  )
}

export default App