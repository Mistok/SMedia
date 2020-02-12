import React from 'react';
import logo from '../../logo.svg';
import Class from './Header.module.css';

const Header = () => {
    return (
    <header className={Class.header}>
         <img src={logo} alt="logo" className={Class.header_img}/> 
     </header>
     
     )
}

export default Header