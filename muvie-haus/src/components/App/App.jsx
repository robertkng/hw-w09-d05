import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import MovieList from '../MovieList/MovieList';
import Nav from '../Nav/Nav';
import SearchHeader from '../SearchHeader/SearchHeader';
// import logo from '../../logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: ''
    }
  }

  updateInput(e) {
    let movieTitle = e.target.value;
    this.setState({
      searchTerm: movieTitle
    })
  }

  submitSearch(e) {
    e.preventDefault();
    // console.log('clicked!');
    fetch(`/search/?${this.state.searchTerm}`)
      .then((data)=>{
        console.log(data)
      })
  }

// binding due to scope issue. this.setstate is within a function
  render() {
    return (
      <div className="App">
        <Nav />
        <SearchHeader
          search={this.submitSearch.bind(this)}
          userInput={this.updateInput.bind(this)}

        />
        <Footer />
      </div>
    );
  }
}

// export default App;
