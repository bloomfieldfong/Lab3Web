import React from 'react';

import Light from '../Light';
import './SimonSaysLight.css';

const SimonSaysLight = ({
    colors = ['red', 'green', 'yellow','blue'],
    turnedOn = 'red'
}) =>(
    <div className = "SimonSaysLight">
        {
        colors.map(
            color =>(
                <Light
                key = {color}
                 color = {color}
                 isTurnedOn = {color   === turnedOn}   
                />
            )
        )
        }
    </div>
);

export default SimonSaysLight;