import React, { Component } from 'react';
import './style.css'

class SafeTypeLists extends React.Component {
    render() { 
        return <div className="safe-list-wrapper">
            <ul className="safe-list-main">
                    <li>All Safes <span className="safe-count">({this.props.safesCount})</span></li>
               </ul>
               </div>;
    }
}
 
export default SafeTypeLists;