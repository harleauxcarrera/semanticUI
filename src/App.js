import React, { Component } from 'react';
import './App.css';
import Header from './comps/Header';
import Body from './comps/Body';
class App extends Component {
  render() {
    return (
      <div >
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
