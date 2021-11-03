
import React from 'react';

import ".././Style.css";

export default function Table() {
    const data = [
        {callerID: "Koki Narimoto", phone: "(660) 660-6600", summary: "Team Lead duties", status: "Pending"},
        {callerID: "Bryan Xu", phone: "(408) 408-4080", summary: "Duties? hehe", status: "In progress"},
        {callerID: "Adarsh Garg", phone: "(510) 510-5101", summary: "Big changes", status: "Fixed"},
        {callerID: "Shaurye Mahajan", phone: "(626) 626-6262", summary: "Small steps", status: "Completed"},
        {callerID: "Sydney Lim", phone: "(420) 420-6969", summary: "Woohoo", status: "In progress"},
        {callerID: "Zion Wang", phone: "(805) 805-8050", summary: "HooWoo", status: "Completed"},
    ]

    const renderData = (data, index) => {
        return(
            <tr key={index}>
                <td>{data.callerID}</td>
                <td>{data.phone}</td>
                <td>{data.summary}</td>
                <td>{data.status}</td>
            </tr>
        )
    }

    return (
        <>
        <h4 className="card-title">Placeholder Table</h4>
        <p className="card-description">Currently using: <code>.table-hover .table-bordered</code> </p>
        <table data-testid="display-table" className="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Caller ID</th>
                    <th>Phone Number</th>
                    <th  data-testid="summary-table">Summary</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map(renderData)}
            </tbody>
        </table>
        </>
    )
}
