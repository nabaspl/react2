import React, { Component } from 'react';
import './style.css'
class Aside extends React.Component {
    render() { 
        return <aside className="safe-aside">{this.props.value}</aside>;
    }
}
 
export default Aside;