import React from 'react';
import ReactDOM from 'react-dom';

var date=new Date().getFullYear();



function Footer(){
    return(
        <footer className="footer">
            <h3   >Copyright @ {date}</h3>
        </footer>

    );
}
export default Footer;