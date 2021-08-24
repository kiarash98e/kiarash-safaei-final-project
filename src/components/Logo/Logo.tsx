import React from 'react';
import LogoWeb from './logo-gold.png'
import {Link} from 'react-router-dom'
import './Logo.style.css'
const Logo = () => {
    return (
        <Link to={'/'}>
            <div>
                <img src={LogoWeb} style={{marginTop:'-.75rem'}} alt="logo website" />
            </div>
        </Link>
    );
}

export default Logo;
