import React, { useEffect, useState } from 'react';
import { list } from '../../datasource/api-project';
import ListItemProject from './ListItemProjects';
import { Link } from 'react-router-dom';

const ListProject = () => {
    const [projectList, setProjectList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    const loadProject = () => {
        list().then((data) => {
            if (data) {
                setProjectList(data || []);

                setIsLoading(false);
            }
        }).catch(err => {
            alert(err.message);
            console.log(err);
        });
    }

    // When the component loads.
    useEffect(() => {
        loadProject();
    }, []);

    // When a item is removed.
    const handleRemove = () => {
        loadProject();
    }

    return (
        <>
            <div>
                <Link to="/projects/add" className="btn btn-primary align-self-end" role="button">
                    <i className="fas fa-plus-circle"></i>
                    Add a new Project
                </Link>
            </div>
            <div className="table-responsive" >
                {isLoading && <div>Loading...</div>}
                {!isLoading &&
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            {/* -- Header Row-- */}
                            <tr>
                                <th className="text-center">Item</th>
                                <th className="text-center">Qty</th>
                                <th className="text-center">Goal</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Message</th>
                                <th className="text-center" colSpan="3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* -- Repeatable Template Row -- */}
                            {projectList.map(project =>
                                <ListItemProject
                                    key={project.id}
                                    project={project}
                                    onRemoved={handleRemove}
                                />
                            )}
                        </tbody>
                    </table>}
            </div>
        </>
    )
}

export default ListProject;