import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const createMovies = () => {
    return movies.map((movie)=>{
      return <div>
        <h2>Title: {movie.title}</h2>
        <h2>Runtime: {movie.time}</h2>
        <ul>{createGenres(movie.genres)}</ul>
      </div>
    })
  };
  
  const createGenres = (genres) => {
    return genres.map((genre)=>{
      return <li>{genre}</li>
    })
  };

  return (
    <div>
        <h1>Movies Page</h1>
        {createMovies()}
    </div>
  );
};

export default Movies;
