import React, { Component } from 'react';
import plusBtnImage from '../../../assets/images/plusBtnImage.svg';
class CreateBtn extends React.Component {

    render() { 
        return <img src={plusBtnImage} onClick={this.props.onClickHandler} className="create-new-btn"/>;
    }
}
 
export default CreateBtn;