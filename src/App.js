import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userHasClicked: 0

    }
  }
  handleButtonClicked=()=> {
    this.setState({userHasClick: this.state.userHasClick + 1})

  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={this.handleButtonClicked}>add task </button>
        <p>{this.state.userHasClick}</p>
        </header>
      </div>
    );
  }
}

export default App;
