import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServicesModel from "../../datasource/servicesModel";
import { create } from "../../datasource/api-service";
import ServicesForm from "./ServicesForm";

const AddServices = () => {
    const navigate = useNavigate();
    const [service, setService] = useState(new ServicesModel());
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setService(formData => ({ ...formData, [name]: value }));
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting service: ", service);

        const submitService = {
            id: service.id,
            item: service.item,
            qty: service.qty,
            goal: service.goal,
            message: service.message.toString(),
            status: service.status,
        };

        create(submitService)
            .then(data => {
                if (data && data.id) {
                    alert(`Item added with the id ${data.id}`);
                    navigate("/services/list");
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
                    <h1>Add Service</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <ServicesForm
                        service={service}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddServices;