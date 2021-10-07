import React, { Component, Fragment } from 'react';
import './style.css'
import CreateBtn from './createBtn';
import Modal from '../../modal/modal';
import computerImage from '../../../assets/images/computerImage.svg';
class CreateSafe extends React.Component {
    render() { 
        return <div className="create-new-safe">
            {this.renderIcon(this.props.isIcon)}
            <CreateBtn onClickHandler={this.handleOpenModal}/>
            <Modal/>
        </div>;
    }
    renderIcon(s){
        if(s==0)
            return <Fragment>
                <img src={computerImage} alt="compuer icon" className="computer-icon"/>
                <span  className="create-safe-info">Create a Safe to get started!</span>
            </Fragment>;
        else
            return;
    }
    
    handleOpenModal(){
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
}
 
export default CreateSafe;