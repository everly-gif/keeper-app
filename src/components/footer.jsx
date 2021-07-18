import React from 'react';
import ReactDOM from 'react-dom';

var date=new Date().getFullYear();

const customStyle={
    textAlign:"center",
    width:"100%"
}

function Footer(){
    return(
        <div style={customStyle} className="footer">
            <h3   >Copyright @ {date}</h3>
        </div>

    );
}
export default Footer;