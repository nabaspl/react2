import React, { Component } from 'react';
import './style.css'
class Section extends React.Component {
    render() { 
        return <section className="main-section">{this.props.value}</section>;
    }
}
 
export default Section;