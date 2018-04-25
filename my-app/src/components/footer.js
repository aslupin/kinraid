import React from 'react'
const Footer = (props) => {
   const styP = {
       color: '#000',
       paddingTop: '20px',
       fontSize: '11px'
   }
   const alink = {
       color: '#cca300'
   }
    return(
        <div style={styP}>
            <p >This project is part of the Innovative Thinking (01200101) <br/> 
            Used data <a href="https://gist.github.com/aslupin/c33d3b86bb084aaeb93d6044e688ff87" style={alink} >@Gist</a>   |Follow us <a href="https://github.com/aslupin/kinraid" style={alink} >@Github</a></p>
        </div>
    );
}
export default Footer;


