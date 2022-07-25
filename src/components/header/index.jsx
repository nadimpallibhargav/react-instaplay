import React from 'react';
import './header.scss';
import logo from '../../assets/images/logo.png';
import search from '../../assets/images/search.svg';

const header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <img src={logo} alt="logo" className='logo' />
          <div className="search">
            <input placeholder='Search movies' id="search" />
            <span><img src={search} alt="search movies" /></span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default header