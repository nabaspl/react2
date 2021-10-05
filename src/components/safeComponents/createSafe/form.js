import { useState } from "react";
import store from '../../../redux/store';
import { safeCreated } from  '../../../redux/safe/actions';
export default function RenderForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let data=inputs;
        store.dispatch(safeCreated(data));
        handleCloseModal();
    }
    
    const handleCloseModal=()=>{
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    return(
        <form className="create-safe" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Safe Name</label>
                        <input name="safeName" value={inputs.safeName || ""} onChange={handleChange} 
                        type="text" className="input safe-name" />
                    </div>
                    <div className="input-group">
                        <label>Owner</label>
                        <input name="safeOwner" value={inputs.safeOwner || ""} onChange={handleChange}  
                        type="text" className="input owner-name" />
                    </div>
                    <div className="input-group">
                        <label>Type</label>
                        <select className="Type" name="safeType" value={inputs.safeType || "personal"} onChange={handleChange}>
                            <option value="personal">Personal</option>
                            <option value="business">business</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Description</label>
                        <textarea name="safeDescription" value={inputs.safeDescription || ""} onChange={handleChange}  
                        rows="6" className="description"/>
                        <span className="input-info">Please add a minimum of 10 characters</span>
                    </div>
                    <div className="button-group">
                        <span className="btn cancel" onClick={handleCloseModal}>Cancel</span>
                        <button className="btn save">+ Create</button>
                    </div>
        </form>
    );
}