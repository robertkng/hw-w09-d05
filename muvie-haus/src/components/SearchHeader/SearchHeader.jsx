import React, { Component } from 'react';
import logo from '../../logo.svg';
import './SearchHeader.css';

class SearchHeader extends Component {
  render() {
    return (
    <div>
        <input
        type="text"
        value={this.props.name}
        onChange={this.props.userInput}
        />
        <button onClick={this.props.search}>SEARCH MOVIES</button>
        <h3>{this.props.result.Title}</h3>
        <img src={this.props.result.Poster} />
        <button onClick={this.props.addToDb}>Add</button>
    </div>
    )
  }
}


export default SearchHeader;
