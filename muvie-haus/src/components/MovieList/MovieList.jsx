import React, { Component } from 'react';
import MovieListItem from '../MovieListItem/MovieListItem';
import './MovieList.css';

class MovieList extends Component {
  componentWillMount(){
    this.props.getAllMovies();
  }



  render(){
    const movies = this.props.movies.map((movie, i) => {
      return (
        <MovieListItem
          key={i}
          title={movie.title}
          poster={movie.poster}
        />
        );
    });
    return (
      <div id="results-container">
        {movies}
        </div>
      );
  }
}


export default MovieList;
