import React from "react";
import { useNavigate } from 'react-router-dom';

const ServicesForm = ({ service = {}, handleChange, handleSubmit }) => {
    const navigate = useNavigate();

    return (
        <form onSubmit={handleSubmit} className="form card p-3">
            <input type="hidden" name="id" value={service.id || ""} />

            <div className="form-group">
                <label htmlFor="itemTextField">Service Name</label>
                <input
                    id="itemTextField"
                    name="item"
                    className="form-control"
                    placeholder="Enter the Service Name"
                    value={service.item || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="QtyTextField">Quantity</label>
                <input
                    id="QtyTextField"
                    name="qty"
                    type="number"
                    className="form-control"
                    placeholder="00"
                    value={service.qty ?? 0}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="goalTextField">Goal</label>
                <input
                    id="goalTextField"
                    name="goal"
                    className="form-control"
                    placeholder="Enter a Goal"
                    value={service.goal || ""}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="statusTextField">Status</label>
                <input
                    id="statusTextField"
                    name="status"
                    className="form-control"
                    placeholder="Enter a status"
                    value={service.status || ""}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="messageTextArea">
                    Message
                </label>
                <textarea
                    id="messageTextArea"
                    name="message"
                    className="form-control"
                    placeholder="Enter the Message"
                    value={service.message || ""}
                    onChange={handleChange}
                    required
                />
            </div>
            &nbsp;
            <button className="btn btn-primary" type="submit">
                <i className="fas fa-edit"></i> Submit
            </button>
            &nbsp;
            <button className="btn btn-warning" type="button" onClick={() => navigate(-1)} >
                <i className="fas fa-undo"></i>
                Cancel
            </button>
        </form>
    );
};

export default ServicesForm;