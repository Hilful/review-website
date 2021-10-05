import React from 'react';
import './About.css';
import logo from '../../images/about-1.png'
import image from '../../images/about-2.jpg'
const About = () => {
    return (
        <div className="body">
             <div className="about-part">
                <div className="about">
                    <h1>Welcome to <samp className="welcome-text">United International University</samp></h1>
                    <h2>Quest For Excellence</h2>
                    <p>The vision of UIU is to become the center of excellence in teaching, learning and research in the South Asian region.</p>
                </div>
                <img className="fast-img" src={logo} alt="" />

            </div>
            <div className="about-part">
                 <img className="fast-img" src={image} alt="" />
                <div className="about">
                    <h1>
                        Our Mission
                    </h1>
                    <p>The mission of UIU is to create excellent human resources with intellectual, creative, technical, moral and practical skills to serve community, industry and region. We do it by developing integrated, interactive, involved and caring relationships among teachers, students, guardians and employers.</p>
                </div>
                
            </div>
        </div>
    );
};

export default About;