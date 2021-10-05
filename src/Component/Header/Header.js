import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/uiu.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            {/* Nav tag containing links for home,about,class and contact us part */}
            <nav className="nav-link">
           <Link to="/Home"    style={{ textDecoration: 'none',margin:'5px',color: 'black' }}>Home</Link>
           <Link to="/About"   style={{ textDecoration: 'none',margin:'5px',color: 'black' }} >About</Link>
           <Link to="/Class"style={{ textDecoration:'none',margin:'5px',color: 'black' }}>Class</Link>
           <Link to="/ContactUs"style={{ textDecoration:'none',margin:'5px',color: 'black' }}>ContactUs</Link>
          
           </nav>
        </div>
    );
};

export default Header;