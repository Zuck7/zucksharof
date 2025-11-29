import { remove } from "../../datasource/api-project";
import { Link } from "react-router-dom";

const ListItemProject = ({ project, onRemoved }) => {

    const handleRemove = (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            remove(id)
                .then(data => {
                    if (data && data.success) {
                        if (typeof onRemoved === 'function') onRemoved(id);
                    }
                })
                .catch(err => {
                    alert(err.message);
                    console.log(err);
                });
        }
    };

    return (
        <tr >
            <td className="text-center"> {project.item || ''} </td>
            <td className="text-center"> {project.qty || ''} </td>
            <td className="text-center"> {project.status || ''} </td>
            <td className="text-center">{project.message.toString() || ''}</td>
            <td className="text-center">
                <Link className="btn bg-primary btn-primary btn-sm" to={'/projects/edit/' + project.id}>
                    <i className="fas fa-pencil-alt"></i>
                </Link>
            </td>
            <td className="text-center">
                <button
                    className="btn bg-danger btn-danger btn-sm"
                    onClick={() => handleRemove(project.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    );

}

export default ListItemProject;