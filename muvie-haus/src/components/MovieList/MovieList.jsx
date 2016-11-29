import React, { Component } from 'react';
import MovieListItem from '../MovieListItem/MovieListItem';
import './MovieList.css';

class MovieList extends Component {

  renderAllMovies() {
    return this.props.movies.map((mov, i) =>
      <MovieListItem
        title={mov.title}
        poster={mov.poster}
        key={i}
        id={mov.id}
      />
      )
  }


  componentWillMount(){
    this.props.getAllMovies();
  }



  render() {
    return(
      <div>
      <h2>Now Showing</h2>

      {this.renderAllMovies()}

      </div>

      )
    };
}


export default MovieList;
