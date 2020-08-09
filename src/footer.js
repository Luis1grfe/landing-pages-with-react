import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(props){
    return(
        <div className="footer-copyright text-center py-3 text-light bg-dark">
           {props.footerText}
        </div>
    );
}
export default Footer;