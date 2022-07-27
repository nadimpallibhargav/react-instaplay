import React, {useEffect, useState} from 'react';
import './styles/style.scss';
import './components/header/header.scss';
import bannerImg from './assets/images/homeBanner.png';
import filter from './assets/images/filter.svg';
import downArrow from './assets/images/downArrow.svg';
import homeStar from './assets/images/homeStar.svg';
import homePlay from './assets/images/homePlay.svg';
import leftArrow from './assets/images/leftArrow.svg';
import rightArrow from './assets/images/rightArrow.svg';
import logo from './assets/images/logo.png';
import searchImg from './assets/images/search.svg';
import inputLoader from './assets/images/inputLoader.gif';

const App = () => {

  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  async function fetchMovie(title) {
    const apiresponse = await fetch( title ? 
      (`https://api.themoviedb.org/3/search/movie?api_key=8081a26645ae034a7e21ff1d42432898&language=en-US&query=${title}&page=1&include_adult=false`)
      :
      ('https://api.themoviedb.org/3/movie/popular?api_key=8081a26645ae034a7e21ff1d42432898')
    );
    const jsonData = await apiresponse.json();
    const moviesData = jsonData.results;
    setMovies(moviesData);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  function titleEnter(e) {
    setSearch(e.target.value);

    setTimeout(doneTyping, 500);

    if(e.target.value.length >= 3) {
      document.querySelector('.searchImg').style.display = 'none';
      document.querySelector('.inputLoader').style.display = 'initial';      
      setTimeout(() => {
        fetchMovie(search);
      }, 300);
    } else {
      fetchMovie();
      document.querySelector('.searchImg').style.display = 'block';
      document.querySelector('.inputLoader').style.display = 'none';
    }
  }

  function doneTyping () {
    document.querySelector('.searchImg').style.display = 'block';
    document.querySelector('.inputLoader').style.display = 'none'; 
  }

  return (    
    <main className="App">

    <header>
      <div className="container">
        <nav>
          <img src={logo} alt="logo" className='logo' />
          <div className="search">
            <input value={search} placeholder='Search movies' onChange={(e) => titleEnter(e)} />
            <button onClick={() => fetchMovie(search)}>
              <img src={searchImg} alt="search movies" className='searchImg' width={20} height={20} />
              <img src={inputLoader} alt="loading" className='inputLoader' width={20} height={20} />
            </button>
          </div>
        </nav>
      </div>
    </header>

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
          <div className="trendingPagination">
            <ul>
              <li><button><img src={leftArrow} alt="previous icon" /></button></li>
              <li><button>1</button></li>
              <li><button>2</button></li>
              <li><button>3</button></li>
              <li><button>4</button></li>
              <li><button>5</button></li>
              <li><button>6</button></li>
              <li><button><img src={rightArrow} alt="next icon" /></button></li>
            </ul>
          </div>
        </div>
      </section>
    </main>          
  )
}

export default App