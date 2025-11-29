import React from "react";
import { useNavigate } from 'react-router-dom';

const ContactsForm = ({ contact = {}, handleChange, handleSubmit }) => {
    const navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit} className="form card p-3">
            <input type="hidden" name="id" value={contact.id || ""} />

            <div className="form-group">
                <label htmlFor="fNameTextField">First Name</label>
                <input
                    id="fNameTextField"
                    name="fName"
                    className="form-control"
                    placeholder="Enter your first name"
                    value={contact.fName || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="lNameTextField">Last Name</label>
                <input
                    id="lNameTextField"
                    name="lName"
                    className="form-control"
                    placeholder="Enter your last name"
                    value={contact.lName || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="emailTextField">E-mail</label>
                <input
                    id="emailTextField"
                    name="email"
                    className="form-control"
                    placeholder="Enter your E-mail"
                    value={contact.email || ""}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="pNumberTextField">Phone Number</label>
                <input
                    id="pNumberTextField"
                    name="pNumber"
                    className="form-control"
                    placeholder="Enter your Phone Number"
                    value={contact.pNumber || ""}
                    onChange={handleChange}
                />
            </div>

            &nbsp;
            <button className="btn btn-primary" type="submit">
                <i className="fas fa-edit"></i> Submit
            </button>
            &nbsp;
            <button className="btn btn-warning" type="button" onClick={() => navigate(-1)} >
                <i className="fas fa-undo"></i>
                Cancel
            </button>
        </form>
    );
};

export default ContactsForm;