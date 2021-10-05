import React, { Component } from 'react';
import './style.css'
import NavList from './navbarLists';
class Navbar extends React.Component {
    render() { 
        return <nav>
            <div className="nav-left">
                <NavList/>
            </div>
            <div className="nav-right">
                <ul className="nav-menu">
                    <li><a>Documentation</a></li>
                    <li><a>(Admin) Davis R.</a></li>
                </ul>
            </div>
        </nav>;
    }
}
 
export default Navbar;