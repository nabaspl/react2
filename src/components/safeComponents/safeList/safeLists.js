import React from 'react';
import './style.css'
import safeIcon from '../../../assets/images/safeIcon.svg';
import deleteIcon from '../../../assets/images/icon_delete_inactive.svg';
import editIcon from '../../../assets/images/icon_edit_active.svg';
import {useSelector} from 'react-redux'
import store from '../../../redux/store';
import { safeDeleted,safeEdit } from '../../../redux/safe/actions';
import Modal from '../../modal/modal';

export function SafeLists(props) { 
    const safeLists = useSelector((state) => state.SafeReducer.safes)
        return  <li className="safes">
                    <div className="safe-data">
                        <img src={safeIcon}/>
                        <div className="safe-details">
                            <h2 className="safe-name">{props.safeName}</h2>
                            <p className="safe-infos">{props.safeDesc}</p>
                        </div>
                    </div>
                    <div className="safe-action">
                        <img className="icon-edit" src={editIcon} onClick={()=>editSafe(props.safeId)}/>
                        <img className="icon-delete" src={deleteIcon} onClick={()=>deleteSafe(props.index)}/>
                    </div>
                </li>;
    }

    function deleteSafe(index){
        store.dispatch(safeDeleted(index));
        console.log("deleteSafe",index);
    }

    function editSafe(index,safeLists){
        store.dispatch(safeEdit(index));
        handleOpenModal();
    }
    function handleOpenModal(){
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
    }

