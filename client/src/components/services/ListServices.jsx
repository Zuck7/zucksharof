import React, { useEffect, useState } from 'react';
import { list } from '../../datasource/api-service';
import ListItemService from './ListItemServices';
import { Link } from 'react-router-dom';

const ListService = () => {
    const [serviceList, setServiceList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    const loadService = () => {
        list().then((data) => {
            if (data) {
                setServiceList(data || []);

                setIsLoading(false);
            }
        }).catch(err => {
            alert(err.message);
            console.log(err);
        });
    }

    // When the component loads.
    useEffect(() => {
        loadService();
    }, []);

    // When a item is removed.
    const handleRemove = () => {
        loadService();
    }

    return (
        <>
            <div>
                <Link to="/services/add" className="btn btn-primary align-self-end" role="button">
                    <i className="fas fa-plus-circle"></i>
                    Add a new Service
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
                            {serviceList.map(service =>
                                <ListItemService
                                    key={service.id}
                                    service={service}
                                    onRemoved={handleRemove}
                                />
                            )}
                        </tbody>
                    </table>}
            </div>
        </>
    )
}

export default ListService;