import React, { Component } from 'react';
import './App.css';
import Display from './Components/Display'

class WeatherApp extends Component {

    constructor(props){
        super(props);

        this.state = {
            
        }
    }


  colectData = (url) =>{
      fetch('http://history.openweathermap.org/data/2.5/history/city?q=London,UK')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
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
