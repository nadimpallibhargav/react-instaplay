import React, { useEffect, useState } from 'react';
import './header.scss';
import logo from '../../assets/images/logo.png';
import searchImg from '../../assets/images/search.svg';

const Header = () => {

  const [search, setSearch] = useState('');

  async function searchApi(title) {
    const searchRes = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8081a26645ae034a7e21ff1d42432898&language=en-US&query=${title}&page=1&include_adult=false`);
    const searchData = searchRes.json();   
    // setMovies(searchData);
  }

  useEffect(() => {
    searchApi('search');
  }, []);

  return (
    <header>
      <div className="container">
        <nav>
          <img src={logo} alt="logo" className='logo' />
          <div className="search">
            <input value={search} placeholder='Search movies' id="search" onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => searchApi(search)}><img src={searchImg} alt="search movies" /></button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header