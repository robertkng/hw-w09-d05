import React, { Component } from 'react';
import './MovieListItem.css';

class MovieListItem extends Component {

  render() {
    return (

    <div className="nowShowing">
      <h3>{this.props.title}</h3>
      <img src={this.props.poster} />
      <button onClick={() => this.props.deleteFromDb(this.props.id)}>Delete</button>

    </div>
    )
  }
}

export default MovieListItem;


