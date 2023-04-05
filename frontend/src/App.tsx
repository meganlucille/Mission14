import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TopBanner from './Nav';
import Home from './Home';
import Podcasts from './Podcasts';
import MovieList from './Movies/MovieList';

function App(): JSX.Element {
  return (
    <>
      <TopBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/podcasts" element={<Podcasts />} />
      </Routes>
      <br></br>
    </>
  );
}

export default App;
