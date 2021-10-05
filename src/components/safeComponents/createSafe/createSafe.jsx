import React, { Component } from 'react';
import './style.css'
import CreateBtn from './createBtn';
import Modal from '../../modal/modal';
import Form from './form.js';
import computerImage from '../../assets/images/computerImage.svg';
import safeIcon from '../../assets/images/safeIcon.svg';
import { Fragment } from 'react/cjs/react.production.min';
class CreateSafe extends React.Component {
    render() { 
        return <div className="create-new-safe">
            {this.renderIcon(this.props.isIcon)}
            <CreateBtn onClickHandler={this.handleOpenModal}/>
            <Modal ModalHeader={this.renderModalHeader()} ModalBody={<Form/>}/>
        </div>;
    }
    renderIcon(s){
        if(s==0)
            return <img src={computerImage} alt="compuer icon"/>;
        else
            return;
    }
    renderModalHeader(){
        return <Fragment>
            <h2 className="form-h2">Create Safe</h2>
            <div className="form-description">
                <img src={safeIcon} className="safe-icon"/>
                <p>
                    A Safe is a logical unit to store the secrets. All the safes are created within Vault. You can control access only at the safe level. As a vault administrator you can manage safes but cannot view the content of the safe.
                </p>
            </div>
        </Fragment>;
    }
    handleOpenModal(){
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
}
 
export default CreateSafe;