import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="masthead mb-auto">
            <div className="inner">
              <h3 className="masthead-brand">VIZZY</h3>
              <nav className="nav nav-masthead justify-content-center">
                <a className="nav-link active" href="/">Home</a>
                <a className="nav-link" href="/">Products</a>
                <a className="nav-link" href="/">Templates</a>
                <a className="nav-link" href="/">Pricing</a>
              </nav>
            </div>
          </header>

          <main role="main" className="inner cover">
            <h1 className="cover-heading">Create Stunning Visual Media</h1>
            <p className="lead">Super simple tool to create trendy videos and pictures <br />  for your ads, social media, blogs and websites.<br />
                Make your project stand out!</p>
            <p className="lead">
              <a href="/" className="btn btn-lg btn-secondary">Create Design</a>
            </p>
          </main>

          <footer className="mastfoot mt-auto">
            <div className="inner">
              <p>Desing Webpage <a href="https://lunkus.com/">React with Bootstrap 4</a>, by <a
                  href="https://lunkus.com">LUNKUS</a>.</p>
            </div>
          </footer>
        </div>
    );
  }
}

export default App;
