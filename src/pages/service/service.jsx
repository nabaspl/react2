import React, { Component } from 'react';
import './style.css'
import Aside from '../../components/layout/aside/aside';
import Section from '../../components/layout/section/section';
class Service extends React.Component {
    render() { 
        return <main className="main-content">
        <div className="main-wrapper">
            <Aside value={this.renderAside()}/>
            <Section/>
        </div>
    </main>;;
    }
    renderAside = () =>{
        return <h1>routed to Service page</h1>;
    }
}
 
export default Service;