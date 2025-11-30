import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactsModel from "../../datasource/contactsModel";
import { create } from "../../datasource/api-contact";
import ContactsForm from "./ContactsForm";

const AddContacts = () => {
    const navigate = useNavigate();
    const [contact, setContact] = useState(new ContactsModel());
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact(formData => ({ ...formData, [name]: value }));
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting Contact: ", contact);

        const submitContact = {
            id: contact.id,
            firstname: contact.firstname,
            lastname: contact.lastname,
            email: contact.email,
            phone_number: contact.phone_number
        };

        create(submitContact)
            .then(data => {
                if (data && data.id) {
                    alert(`Contact added with the id ${data.id}`);
                    navigate("/contacts/list");
                } else {
                    setErrorMsg(data.message);
                }
            })
            .catch(err => {
                setErrorMsg(err.message);
                console.log(err);
            });
    }


    return (
        <div className="container" style={{ paddingTop: 10 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Add Contact</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <ContactsForm
                        contact={contact}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddContacts;