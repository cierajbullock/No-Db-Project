import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Music from './components/Music';
import SearchMusic from './components/SearchMusic'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Music />
      <SearchMusic />
      </div>
    );
  }
}

export default App;
