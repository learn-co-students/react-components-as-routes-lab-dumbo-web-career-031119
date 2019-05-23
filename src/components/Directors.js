import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const createDirectors = () => {
    return directors.map((director)=>{
      return <div>
        <h1>Name: {director.name}</h1>
        <ul>{createMovies(director.movies)}</ul>
      </div>
    })
  };
  
  const createMovies = (movies) => {
    return movies.map((movie)=>{
      return <li>{movie}</li>
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {createDirectors()}
    </div>
  );
};


export default Directors
