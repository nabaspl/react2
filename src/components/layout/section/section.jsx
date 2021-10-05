import React, { Component } from 'react';
import './style.css'
class Section extends React.Component {
    render() { 
        return <section>{this.props.value}</section>;
    }
}
 
export default Section;