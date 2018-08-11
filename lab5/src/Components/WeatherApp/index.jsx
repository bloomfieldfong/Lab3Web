import React, { Component } from 'react';
import './App.css';
import Display from './Components/Display'

class WeatherApp extends Component {

    constructor(props){
        super(props);

        this.state = {
            
        }
    }




  render() {
    return (
      <div className="App">
         <Display/>
      </div>
    );
  }
}

export default App;
