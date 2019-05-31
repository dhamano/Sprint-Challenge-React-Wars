import React, { Component } from 'react';

import CharacterList from './components/Character/CharacterList';
import Pagination from './components/Pagination/Pagination';

import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      next: '',
      previous: '',
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState(prevState => ({
          next: data.next,
          previous: data.previous,
          starwarsChars: data.results
        }));
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    let pageVars = {
      next: this.state.next,
      previous: this.state.previous,
      fetchData: this.getCharacters
    }
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Pagination pageVars={pageVars} />
        <CharacterList charInfoList={this.state.starwarsChars} />
        <Pagination pageVars={pageVars} />
      </div>

    );
  }
}

export default App;
