import React, { Component } from 'react';
import './MovieListItem.css';

const MovieListItem = props => (

    <div className="movie-item">
      <h2>{`${props.title} `}</h2>
      <img src={props.poster} alt={props.title}/>
    </div>


);

export default MovieListItem;
