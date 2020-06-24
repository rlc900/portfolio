import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header id="header">
      <div class="logo">
        <span class="icon fa-gem"></span>
      </div>
      <div class="content">
        <div class="inner">
          <h1>Rianna Cleary</h1>
          <p>Fullstack Developer that specializes in React & Ruby on Rails.</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="#intro">Intro</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#elements">Elements</a></li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default App;
