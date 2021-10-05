import React, { Component } from 'react';
import './style.css'
class Modal extends React.Component {
    render() { 
        return <div id="myModal" className="modal">
        <div className="modal-content">
            <div className="form-header">
                {this.props.ModalHeader}
            </div>
            {this.props.ModalBody}
        </div>
    </div>;
    }
}
 
export default Modal;