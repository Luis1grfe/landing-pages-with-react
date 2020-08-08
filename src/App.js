import React from 'react';
import logo from './logo.svg';
import Navbar from './navbar';
import './App.css';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <div><Navbar marca="Start Boostrap"/></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div><Footer/></div>
    </div>
  );
}

export default App;
