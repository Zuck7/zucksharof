import { remove } from "../../datasource/api-service";
import { Link } from "react-router-dom";

const ListItemService = ({ service, onRemoved }) => {

    const handleRemove = (id) => {
        if (window.confirm('Are you sure you want to delete this service?')) {
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
            <td className="text-center"> {service.item || ''} </td>
            <td className="text-center"> {service.qty || ''} </td>
            <td className="text-center"> {service.status || ''} </td>
            <td className="text-center">{service.message.toString() || ''}</td>
            <td className="text-center">
                <Link className="btn bg-primary btn-primary btn-sm" to={'/services/edit/' + service.id}>
                    <i className="fas fa-pencil-alt"></i>
                </Link>
            </td>
            <td className="text-center">
                <button
                    className="btn bg-danger btn-danger btn-sm"
                    onClick={() => handleRemove(service.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    );

}

export default ListItemService;