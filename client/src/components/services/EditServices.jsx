import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ServicesModel from "../../datasource/servicesModel";
import { update, read } from "../../datasource/api-service";
import ServicesForm from "./ServicesForm";

const EditService = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [service, setService] = useState(new ServicesModel());
    const [errorMsg, setErrorMsg] = useState('')

    // When the component loads.
    useEffect(() => {
        read(id).then(data => {
            if (data) {
                setService(new ServicesModel(
                    data.id,
                    data.item,
                    data.qty,
                    data.goal,
                    data.status,
                    data.message,
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

        update(submitService, id)
            .then(data => {
                if (data && data.success) {
                    alert(data.message);
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
                    <h1>Edit Service</h1>
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

export default EditService;