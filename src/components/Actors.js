import React from 'react';
import { actors } from '../data';

const Actors = () => {
  
  const createActors = () => {
    return actors.map((actor)=>{
      return <div>
        <h1>Name: {actor.name}</h1>
        <ul>{createMovies(actor.movies)}</ul>
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
      <h1>Actors Page</h1>
      {createActors()}
    </div>
  );
};



export default Actors;
