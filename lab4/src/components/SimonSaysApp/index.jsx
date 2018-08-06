import React, { Fragment } from 'react';

import SimonSaysLight from '../SimonSaysLights';
import './SimonSaysApp.css';

class SimonSaysApp extends React .Component {
    constructor(props){
        super(props);

        this.state = {
            currentLight: '0',
            currentPatern: '0',
            color: ['red', 'green','yellow', 'blue'],
            time: 0,
            colorOn: 0,
        };
    }

    _changeRedLight(){
        console.log("Rojo")
        this.setState({
            currentLight : this.state.currentLight +  '1',
            colorOn: 0
        })
        console.log(this.state)  
    }
    _changeGreenLight(){
        console.log("Green")
        this.setState({
            currentLight: this.state.currentLight + '2',
            colorOn: 1
        })
        console.log(this.state)  

    }
    _changeYellowLight(){
        console.log("Yellow")
        this.setState({
            currentLight: this.state.currentLight + '3',
            colorOn: 2
        })
        console.log(this.state)  
    }

    _changeBlueLight(){
        console.log("Blue")
        this.setState({
            currentLight: this.state.currentLight + '4',
            colorOn: 3
        })
        console.log(this.state)  
    }

    

    render(){
        const { color, colorOn } = this.state;
        return(
            <Fragment>
                <SimonSaysLight turnedOn = {color[colorOn]}/>
                <button className = 'buttonRed' onClick= {this._changeRedLight.bind(this)}/>
                <button className = 'buttonGreen' onClick= {this._changeGreenLight.bind(this)}/>
                <button className = 'buttonYellow' onClick= {this._changeYellowLight.bind(this)}/>
                <button className = 'buttonBlue' onClick= {this._changeBlueLight.bind(this)}/>
            </Fragment>
        )  
    }
}

export default SimonSaysApp;