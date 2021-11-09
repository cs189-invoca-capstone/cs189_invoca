
import React from 'react';

import ".././Style.css";
import "./Table.css";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function Table() {
    const [show, setShow] = useState(false);
    const defaultInfo = [{callerID: "Bryan", phone:"12345", summary:"dummy data", status:"default"}]
    const [tableData, setTableData] = useState(defaultInfo);

    const handleClose = () => setShow(false);

    const data = [
        {callerID: "Koki Narimoto", phone: "(660) 660-6600", summary: "Team Lead duties. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", status: "Pending"},
        {callerID: "Bryan Xu", phone: "(408) 408-4080", summary: "Duties? hehe", status: "In progress"},
        {callerID: "Adarsh Garg", phone: "(510) 510-5101", summary: "Big changes", status: "Fixed"},
        {callerID: "Shaurye Mahajan", phone: "(626) 626-6262", summary: "Small steps", status: "Completed"},
        {callerID: "Sydney Lim", phone: "(420) 420-6969", summary: "Woohoo", status: "In progress"},
        {callerID: "Zion Wang", phone: "(805) 805-8050", summary: "HooWoo", status: "Completed"},
    ]

    const handleTableClick = (data) => {
        setShow(true);
        setTableData(data)
    }

    const renderData = (data, index) => {
        return(
            <tr key={index} onClick={() => handleTableClick(data)}>
                <td>{data.callerID}</td>
                <td>{data.phone}</td>
                <td  className='tableStyle'>{data.summary}</td>
                <td>{data.status}</td>
            </tr>
        )
    }

    return (
        <>
        <h1>Call Summarizations</h1>
        <p className="card-description">Made by: <code>#Koki's Kookies</code> </p>
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

        <Modal show={show} onHide={handleClose} info={tableData}>
            <Modal.Header closeButton>
            <Modal.Title>{tableData.callerID} {tableData.phone}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{tableData.summary}</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Edit
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
