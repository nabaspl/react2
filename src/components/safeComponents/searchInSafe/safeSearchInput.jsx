import React, { Component } from 'react';
import './style.css'
import searchIcon from '../../assets/images/searchIcon.svg';
class SearchBox extends React.Component {
    render() { 
        return <div className="col safe-search-wrapper">
                <div className="input-container">
                <span className="search-icon">
                <img src={searchIcon} className="searchIcon"/>
                </span>
                <input className="input-field" type="text" placeholder="Search"/>
                </div>
            </div>;
    }
}
 
export default SearchBox;