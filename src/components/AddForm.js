import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ADD_SMURF, newError } from '../actions/index'

const AddForm = (props) => {
    const { error } = useSelector(state => state)
    const dispatch = useDispatch()

    const [state, setState] = useState({
        name:"",
        position:"",
        nickname:"",
        description:""
    });

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (state.name === "" || state.position === "" || state.nickname === "") {
            // errorMessage = "Name, position and nickname fields are required.";
            dispatch(newError('Name, position, and nickname fields are required'))
        }
    }

    // const errorMessage = "";

    return(<section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label><br/>
                <input onChange={handleChange} value={state.name} name="name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="position">Position:</label><br/>
                <input onChange={handleChange} value={state.position} name="position" id="position" />
            </div>
            <div className="form-group">
                <label htmlFor="nickname">Nickname:</label><br/>
                <input onChange={handleChange} value={state.nickname} name="nickname" id="nickname" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label><br/>
                <textarea onChange={handleChange} value={state.description} name="description" id="description" />
            </div>
            {
                error === 'Name, position, and nickname fields are required' && <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {error}</div>
            }
            <button>Submit Smurf</button>
        </form>
    </section>);
}

export default AddForm;

//Task List:
//1. Connect the errorMessage, setError and addSmurf actions to the AddForm component. DONE
//2. Replace all instances of the errorMessage static variable with your error message state value. DONE 
//3. Within the handleSubmit function, replace the static assignment to errorMessage with a call to the setError action. Test that an error is displayed when this validation code fails. DONE
//4. Within the handleSubmit function, call your addSmurf action with the smurf name, position, nickname and summury passed as arguments. Test that a smurf is correctly added to when the form is submitted.