import './App.css';
import Menu from './Components/Menu'
import line from './line.png'
import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div className="App">
       {/*  <header className="App-header">
          <a href="index.html"><img src={portoflio} className="App-logo" alt="logo" /></a>
        </header> */}
        
        <div className="line-container">
          <img src={line} className="line" alt="line" height="300" />
        </div>
        <Menu />
      </div>
    );
  }
}

export default App;
