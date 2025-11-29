import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectsModel from "../../datasource/projectsModel";
import { update, read } from "../../datasource/api-project";
import ProjectsForm from "./ProjectsForm";

const EditProject = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [project, setProject] = useState(new ProjectsModel());
    const [errorMsg, setErrorMsg] = useState('')

    // When the component loads.
    useEffect(() => {
        read(id).then(data => {
            if (data) {
                setProject(new ProjectsModel(
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
        setProject(formData => ({ ...formData, [name]: value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting product: ", project);

        const submitProject = {
            id: project.id,
            item: project.item,
            qty: project.qty,
            goal: project.goal,
            message: project.message.toString(),
            status: project.status,
        };

        update(submitProject, id)
            .then(data => {
                if (data && data.success) {
                    alert(data.message);
                    navigate("/projects/list");
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
                    <h1>Edit Project</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <ProjectsForm
                        peoject={project}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default EditProject;