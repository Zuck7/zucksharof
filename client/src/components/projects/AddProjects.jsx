import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectsModel from "../../datasource/projectsModel";
import { create } from "../../datasource/api-inventory";
import ProjectsForm from "./ProjectsForm";

const AddProjects = () => {
    const navigate = useNavigate();
    const [project, setProject] = useState(new ProjectsModel());
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProject(formData => ({ ...formData, [name]: value }));
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting project: ", project);

        const submitProject = {
            id: project.id,
            item: project.item,
            qty: project.qty,
            goal: project.goal,
            message: project.message.toString(),
            status: product.status,
        };

        create(submitProject)
            .then(data => {
                if (data && data.id) {
                    alert(`Item added with the id ${data.id}`);
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
                    <h1>Add Project</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <ProjectsForm
                        project={project}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddProjects;