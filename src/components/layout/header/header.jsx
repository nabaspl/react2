import React, { Component } from 'react';
import  './style.css'
import logo from '../../assets/images/logo.png';
import Navbar from '../navbar/navbar'; 
class Header extends React.Component {
    render() { 
        return <header>
            <div className="header-wrapper">
                <div className="logo-container">
                    <img className="logo-img" src={logo} />
                </div>
                <Navbar/>
            </div>
            
        </header>;
    }
}
 
export default Header;