import React from "react";
import { useNavigate } from 'react-router-dom';

const ContactsForm = ({ contact = {}, handleChange, handleSubmit }) => {
    const navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit} className="form card p-3">
            <input type="hidden" name="id" value={contact.id || ""} />

            <div className="form-group">
                <label htmlFor="firstnameTextField">First Name</label>
                <input
                    id="firstnameTextField"
                    name="firstname"
                    className="form-control"
                    placeholder="Enter your first name"
                    value={contact.firstname || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="lastnameTextField">Last Name</label>
                <input
                    id="lastnameTextField"
                    name="lastname"
                    className="form-control"
                    placeholder="Enter your last name"
                    value={contact.lastname || ""}
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
                <label htmlFor="phone_numberTextField">Phone Number</label>
                <input
                    id="phone_numberTextField"
                    name="phone_number"
                    className="form-control"
                    placeholder="Enter your Phone Number"
                    value={contact.phone_number || ""}
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