import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContactsModel from "../../datasource/contactsModel";
import { update, read } from "../../datasource/api-contact";
import ContactsForm from "./ContactsForm";

const EditContact = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [contact, setContact] = useState(new ContactsModel());
    const [errorMsg, setErrorMsg] = useState('')

    // When the component loads.
    useEffect(() => {
        read(id).then(data => {
            if (data) {
                setContact(new ContactsModel(
                    data.id,
                    data.firstname,
                    data.lastname,
                    data.email,
                    data.phone_number
                ));
            } else {
                setErrorMsg(data.message);
            }

        }).catch(err => {
            setErrorMsg(err.message);
            console.log(err);
        });
    }, [id, navigate]);

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

        update(submitContact, id)
            .then(data => {
                if (data && data.success) {
                    alert(data.message);
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
                    <h1>Edit Contact</h1>
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

export default EditContact;