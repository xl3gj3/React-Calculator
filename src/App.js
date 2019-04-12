import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Calculator from './components/calculator'
// import $ from "jquery";
class App extends Component {
  render() {
    return (
      <main className="container-sm mt-5 pl-5 pr-5 pb-1 pt-5 customize-border">
        <Calculator />
      </main>
    );
  }
}

export default App;
