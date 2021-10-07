import React, { Component } from 'react';
import './style.css'
import Aside from '../../components/layout/aside/aside';
import Section from '../../components/layout/section/section';
import { useParams } from "react-router-dom";
export default function Vault(){
    
        const { name } = useParams();
        return <main className="main-content">
        <div className="main-wrapper">
            <Aside value={renderAside()}/>
            <Section value={renderSection(name)}/>
        </div>
    </main>;
    
}
    function renderAside(){
        return <h1>routed to Vault page</h1>;
    }

    function renderSection(name){
        return <p> {name} - (this value passed from link)</p>
    }

