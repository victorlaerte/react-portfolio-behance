import React, { Component } from 'react';
import './App.css';
import Portfolio from './components/Portfolio/Portfolio';

class App extends Component {
  render() {

    const users = [
      'AitorPrieto',
      'emas',
      'pixego',
      'akirax',
      'dennisschafer',
      'superfiction'
    ];

    const user = users[Math.floor(Math.random() * users.length)];

    return (
      <Portfolio user={user} showFeatured />
    );
  }
}

export default App;
