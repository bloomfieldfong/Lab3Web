import React, { Fragment } from 'react';

import SimonSaysLight from '../SimonSaysLights';
import './SimonSaysApp.css';

class SimonSaysApp extends React .Component {
    constructor(props){
        super(props);

        this.state = {
            currentLight: [],
            currentPatern: [],
            color: ['red', 'green','yellow', 'blue'],
            colorOn: 0,
            jugadas: 4,
        };
    }

    _changeRedLight(){
        console.log("Rojo");
        console.log(this.state.currentLight);  
        const {currentLight} = this.state;
        currentLight.push(0);
        this.setState({
            currentLight : currentLight,
            colorOn: 0
        })
    }
    _changeGreenLight(){
;        console.log("Green");
        console.log(this.state.currentLight);
        const {currentLight} = this.state;
        currentLight.push(1);
        this.setState({
            currentLight : currentLight,
            colorOn: 1
        })

    }
    _changeYellowLight(){
        console.log("Yellow");
        console.log(this.state.currentLight) ;
        const {currentLight} = this.state;
        currentLight.push(2);
        this.setState({
            currentLight : currentLight,
            colorOn: 2
        })
    }

    _changeBlueLight(){
        console.log("Blue");
        console.log(this.state.currentLight) ;
        const {currentLight} = this.state;
        currentLight.push(3);
        this.setState({
            currentLight : currentLight,
            colorOn: 3
        })
    }

    _changeColor(){
        
        const {currentPatern} = this.state;
        const h = Math.floor((Math.random() * 4) )
        currentPatern.push(h);

        this.setState({
            currentPatern: currentPatern,
            colorOn: h
            
        })

        
        if(this.state.jugadas == this.state.currentPatern.length){
            console.log('hey')
            const {timer} = this.state;
            clearInterval(timer);
            console.log(this.state.currentPatern)
            this.state.jugadas++;   
            this.state.currentLight = []
        }

        if(this.state.currentLight === this.state.currentPatern){
            const {timer} = this.state;
            clearInterval(timer);
            this._startRandom()
            
        }
            
    }


    _startRandom(){
        const timer = setInterval(()=>this._changeColor(),1000);
        this.setState({
          timer, 
        })

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
                <button className = 'reiniciar' onClick = {this._startRandom.bind(this)}>Iniciar</button>
            </Fragment>
        )  
    }
}

export default SimonSaysApp;