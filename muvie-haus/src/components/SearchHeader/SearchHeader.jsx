import React, { Component } from 'react';
import logo from '../../logo.svg';
import './SearchHeader.css';

class SearchHeader extends Component {
  render() {
    return (
    <div>
      <form>
        <input
        type="text"
        value={this.props.term}
        onChange={this.props.userInput}
        />
        <button onClick={this.props.search}>SEARCH MOVIES</button>
      </form>
    </div>
    )
  }
}


export default SearchHeader;
