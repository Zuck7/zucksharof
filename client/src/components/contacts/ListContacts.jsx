import React, { useEffect, useState } from 'react';
import { list } from '../../datasource/api-contact';
import ListItemContact from './ListItemContacts';
import { Link } from 'react-router-dom';

const ListContact = () => {
    const [contactList, setContactList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    const loadContact = () => {
        list().then((data) => {
            if (data) {
                setContactList(data || []);

                setIsLoading(false);
            }
        }).catch(err => {
            alert(err.message);
            console.log(err);
        });
    }

    // When the component loads.
    useEffect(() => {
        loadContact();
    }, []);

    // When a item is removed.
    const handleRemove = () => {
        loadContact();
    }

    return (
        <>
            <div>
                <Link to="/contacts/add" className="btn btn-primary align-self-end" role="button">
                    <i className="fas fa-plus-circle"></i>
                    Add a new Contact
                </Link>
            </div>
            <div className="table-responsive" >
                {isLoading && <div>Loading...</div>}
                {!isLoading &&
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            {/* -- Header Row-- */}
                            <tr>
                                <th className="text-center">First Name</th>
                                <th className="text-center">Last Name</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Phone Number</th>
                                <th className="text-center" colSpan="3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* -- Repeatable Template Row -- */}
                            {contactList.map(contact =>
                                <ListItemContact
                                    key={contact.id}
                                    contact={contact}
                                    onRemoved={handleRemove}
                                />
                            )}
                        </tbody>
                    </table>}
            </div>
        </>
    )
}

export default ListContact;