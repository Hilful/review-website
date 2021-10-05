
import React from 'react';
import { Button } from 'react-bootstrap';

import './Footer.css'
const Footer = () => {
    return (
        // Section containing footer Details along with a button 
        <div className="footer">
           
                            <h2>United International University</h2>
                            <p>United City, Madani Avenue,  Badda, Dhaka 1212, Bangladesh.
                                <br />

                            Phone: +88 09604-848-848</p>
                            
                            
                            <Button variant="secondary">Call Us</Button>
                            <br />
                            <small>© Copyrights 2021 United Group rights reserved</small>
                        
                    
        </div>
    );
};

export default Footer;