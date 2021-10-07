import React, { useState, useEffect } from 'react';
import store from '../../../redux/store';
import { safeCreated } from  '../../../redux/safe/actions';
import {useSelector} from 'react-redux'
import { safeEdit} from '../../../redux/safe/actions';
export default function RenderForm() {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    
    const editIndex = useSelector((state) => state.SafeReducer.editSafes)
    const editSafeData =useSelector((state) => state.SafeReducer.editSafeData)
    if(editIndex){
        console.log("current safe",editSafeData[0])
        inputs.safeIndex = editIndex;
        inputs.safeId = editSafeData[0].id;
        inputs.safeName = editSafeData[0].safeName;
        inputs.safeOwner = editSafeData[0].safeOwner;
        inputs.safeType = editSafeData[0].safeType;
        inputs.safeDescription = editSafeData[0].safeDescription;
        store.dispatch(safeEdit(false));
        
    }

    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
        
        if(value)
        setErrors(values => ({...values, [name]: false}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let data=inputs;
        if(! handleValidation(data)){
            return;
        }

        store.dispatch(safeCreated(data));
        handleCloseModal();
    }
    
    const handleCloseModal=()=>{
        
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
        setInputs(values => ({}))
        setErrors(values => ({}))
    }

    const handleValidation=(data)=>{
        if(!data.safeName){
            setErrors(values => ({...values, safeName: true}));
            return  false;
        }
        if(!data.safeOwner){
            setErrors(values => ({...values, safeOwner: true}));
            return  false;
        }
        if(!data.safeType){
            setErrors(values => ({...values, safeType: true}));
            return  false;
        }
        if(!data.safeDescription){
            setErrors(values => ({...values, safeDescription: true}));
            return  false;
        }
        return true;

      }
    return(
        <form className="create-safe" onSubmit={handleSubmit}>
            <input type="hidden" value={inputs.safeId} name="safeId"/>
            <input type="hidden" value={inputs.safeIndex} name="safeIndex"/>
                    <div className="input-group">
                        <label>Safe Name</label>
                        <input name="safeName" value={inputs.safeName || ""} onChange={handleChange} 
                        type="text" className="input safe-name" />
                        {errors.safeName && <span style={{ color: "red" }}>This Field is Required</span>}
                    </div>
                    <div className="input-group">
                        <label>Owner</label>
                        <input name="safeOwner" value={inputs.safeOwner || ""} onChange={handleChange}  
                        type="text" className="input owner-name" />
                        {errors.safeOwner && <span style={{ color: "red" }}>This Field is Required</span>}
                    </div>
                    <div className="input-group">
                        <label>Type</label>
                        <select className="Type" name="safeType" value={inputs.safeType || "personal"} onChange={handleChange}>
                            <option value="personal">Personal</option>
                            <option value="business">business</option>
                        </select>
                        {errors.safeType && <span style={{ color: "red" }}>This Field is Required</span>}
                    </div>
                    <div className="input-group">
                        <label>Description</label>
                        <textarea name="safeDescription" value={inputs.safeDescription || ""} onChange={handleChange}  
                        rows="6" className="description"/>
                        <span className="input-info">Please add a minimum of 10 characters</span>
                        {errors.safeDescription && <span style={{ color: "red" }}>This Field is Required</span>}
                    </div>
                    <div className="button-group">
                        <span className="btn cancel" onClick={handleCloseModal}>Cancel</span>
                        {inputs.safeId ? <button className="btn save">Update</button> : <button className="btn save">+ Create</button>}
                    </div>
        </form>
    );
}
