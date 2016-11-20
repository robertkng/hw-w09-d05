import React, { Component } from 'react';
import logo from '../../logo.svg';
import './SearchHeader.css';

class SearchHeader extends Component {
  render() {
    return (
    <div>
      <form>
        <input onChange={this.props.userInput}></input>
        <button onClick={this.props.search}>SEARCH MOVIES</button>
      </form>
    </div>
    )
  }
}


export default SearchHeader;
