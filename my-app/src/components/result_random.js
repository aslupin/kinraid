import React from 'react'
import Spoon from '../dist/img/spoon.png'
import Fork from '../dist/img/fork.png'

const Result = (props) => {
    const colorFood = {
        // color: '#5C9973',
        color: '#000',
        fontSize: '27.5px'
        
    }
    const stySpoonAndFork = {
        width: '27px',
    }
    return(
        <div>
        
        <div style={colorFood}> 
            <img src={Spoon} style={stySpoonAndFork} />
            {props.get_food}  
            <img src={Fork} style={stySpoonAndFork} />
        </div>
        
        </div>
    );
}
export default Result;


