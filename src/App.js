import React, { Component } from 'react';
import './App.css';
import './screen.css'
import Landing from './components/landing';
import Skills from './components/skills';
import Projects from './components/projects';
import Achievement from './components/achievement';
import ReallySmoothScroll from 'really-smooth-scroll';
import Footer from './components/footer';


ReallySmoothScroll.shim();
ReallySmoothScroll.config({
  mousewheelSensitivity: 7
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing></Landing>
        <Skills></Skills>
        <Projects></Projects>
        <Achievement></Achievement>
        <Footer />
      </div>
    );
  }
}

export default App;