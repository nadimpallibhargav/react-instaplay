import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MovieDetail from '../components/movieDetail'
import Home from '../App'

const AppRoutes = () => {
  return (
    <Router>
    <ScrollToTop />
    <ModalProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/detail" element={<MovieDetail />} />
      </Routes>
    </ModalProvider>
  </Router>
  )
}

export default AppRoutes