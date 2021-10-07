import React, { Component } from 'react';
import './style.css'
import Form from '../safeComponents/createSafe/form';
import safeIcon from '../../assets/images/safeIcon.svg';
import {useSelector} from 'react-redux'
function Modal(){
        

        return (<div id="myModal" className="modal">
        <div className="modal-content">
            
                {renderModalHeader()}
                <Form/>
        </div>
    </div>);
    
}
    function renderModalHeader(isEdit){
        return <div className="form-header">
            <h2 className="form-h2">Create Safe</h2>
            <div className="form-description">
                <img src={safeIcon} className="safe-icon"/>
                <p>
                    A Safe is a logical unit to store the secrets. All the safes are created within Vault. You can control access only at the safe level. As a vault administrator you can manage safes but cannot view the content of the safe.
                </p>
            </div>
            </div>;
    }

 
export default Modal;