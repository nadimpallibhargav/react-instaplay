import React, {useEffect, useState} from 'react';
import Header from './components/header';
import './styles/style.scss';
import bannerImg from './assets/images/homeBanner.png';
import filter from './assets/images/filter.svg';
import downArrow from './assets/images/downArrow.svg';
import homeStar from './assets/images/homeStar.svg';
import homePlay from './assets/images/homePlay.svg';

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
    <main className="App">

      <Header />

      <section className="banner">
        <div className="bannerImg">
          <img src={bannerImg} alt="banner image" />
        </div>
      </section>

      <section className='trending'>
        <div className="container">
          <div className="trendingFilter">
            <h2>Trending</h2>
            <div className="filter">
              <div className="filterBtn">
                <img src={filter} alt="filter icon" />
                <span>Sort by Ratings</span>
                <img src={downArrow} alt="filter arrow" />
              </div>
              <div className="filterDropdown">
                <ul>
                  <li><button>High to Low</button></li>
                  <li><button>Low to High</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="trendingmovies">
            {movies ? (movies.map((movie,id) => (
              <div className="movieCard" key={id}>
                <div className="movieCardImg">
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className="movieCardInfo">
                  <div className="movieCardTitle">
                    <h3>{movie.title}</h3>
                    <div className="movieCardRating"> 
                      <img src={homeStar} alt="ratings" /> <span>{movie.vote_average} / 10</span> 
                    </div> 
                  </div>
                  <div className="movieCardPlay">
                    <img src={homePlay} alt="play icon" />
                  </div>
                </div>               
              </div>
            ))
            ): (
              <h2>No Movies</h2>
            )}
          </div>
        </div>
      </section>
    </main>          
  )
}

export default App