import React from 'react';
import LogoWeb from './logo-gold.png'
import './Logo.style.css'
const Logo = () => {
    return (
        <div>
            <img src={LogoWeb} style={{marginTop:'-.75rem'}} alt="logo website" />
        </div>
    );
}

export default Logo;
