import React from 'react'
const Footer = (props) => {
   const styP = {
       color: '#000',
       paddingTop: '20px',
       fontSize: '11px'
   }
    return(
        <div style={styP}>
            <p >This project is part of the Innovative Thinking (01200101) <br/> |Follow us <a href="https://github.com/aslupin/kinraid">@Github</a> </p>
        </div>
    );
}
export default Footer;


