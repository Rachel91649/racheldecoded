import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//File Imports
import Navigation from './Navigation';
import Welcome from './Welcome';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Welcome />
        <About />
        <Skills />
        <Projects />

      </div>
    );
  }
}

export default App;
