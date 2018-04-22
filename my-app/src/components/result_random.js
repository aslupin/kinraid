import React from 'react'
const Result = (props) => {
    const colorFood = {
        color: '#5C9973'
    }
    return(
        
        <div style={colorFood}> 
         
         {props.get_food}  
         
         </div>
    
    );
}
export default Result;


