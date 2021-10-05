import React from 'react';
import './ContactUs.css'
const ContactUs = () => {
    return (
        <div className="contact-body">
            <h1>Join with UIU today and stay tuned!</h1> 
            {/* section containing name , email and courses */}
            <div className="contactUs" >
            
                <div className="textSection" >
                <textarea className="textarea" type="text" placeholder="Name"/>
                </div>

                <div className="textSection"><textarea className="textarea" type="text" placeholder="Email"/></div>

                <div className="textSection"><textarea className="textarea" type="text" placeholder="Course: Enter the courses you want to get enrolled into"/></div>
            
            </div>
            {/* section for message */}
            <h2>For further queries </h2>
           <textarea className="textarea" type="text" placeholder="Message"/>
        </div>
    );
};

export default ContactUs;