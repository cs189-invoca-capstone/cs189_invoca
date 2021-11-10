
import React from 'react';

// import ".././Style.css";
import "./Table.css";
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function Table() {
    const [show, setShow] = useState(false);
    const defaultInfo = [{callerID: "Bryan", phone:"12345", summary:"dummy data", status:"default"}]
    const [tableData, setTableData] = useState(defaultInfo);

    const [callLogs, setCallLogs] = useState( [] );

    const handleClose = () => setShow(false);

    const data = [
        {callerID: "Koki Narimoto", phone: "(660) 660-6600", summary: "Team Lead duties. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", status: "Pending"},
        {callerID: "Bryan Xu", phone: "(408) 408-4080", summary: "Duties? hehe", status: "In progress"},
        {callerID: "Adarsh Garg", phone: "(510) 510-5101", summary: "Big changes", status: "Fixed"},
        {callerID: "Shaurye Mahajan", phone: "(626) 626-6262", summary: "Small steps", status: "Completed"},
        {callerID: "Sydney Lim", phone: "(420) 420-6969", summary: "Woohoo", status: "In progress"},
        {callerID: "Zion Wang", phone: "(805) 805-8050", summary: "HooWoo", status: "Completed"},
    ]

    useEffect(() => {
        const getLogs = async () => {
            try{
                // swap 0 with actual call id once we extract it from login
                // and once the databse actually stores the user ID
                const logs = await axios("callLogs/all/0");
                console.log(logs.data);
                setCallLogs(logs.data);
            }catch(err){
                console.log(err);
            }
        };
        getLogs();
    }, [])

    const handleTableClick = (data) => {
        setShow(true);
        setTableData(data)
    }

    const handleDelete = (data) => {
        const deleteLog = async () => {
            try{
                // swap 0 with actual call id once we extract it from login
                // and once the databse actually stores the user ID
                async function deletePost() {
                    await axios.delete('callLogs/' + data._id)
                    .then(response => console.log('Delete successful'))
                    .catch(error => {
                        console.error('There was an error!', error);
                    });
                }
            
                deletePost();

                const newLogs = await axios("callLogs/all/0");
                setCallLogs(newLogs.data);
            }catch(err){
                console.log(err);
            }
        };
        deleteLog();
    }


    const renderData = (data, index) => {
        return(
            <tr key={index}>
                <td onClick={() => handleTableClick(data)}>{data.callerID}</td>
                <td onClick={() => handleTableClick(data)}>{data.phone}</td>
                <td onClick={() => handleTableClick(data)} className='tableStyle'>{data.summary}</td>
                <td onClick={() => handleTableClick(data)}>{data.status}</td>
                <td onClick={() => handleDelete(data)}>    
                <Button variant="outline-danger">
                    Delete
                </Button>
                </td>
            </tr>
        )
    }

    const renderLogs = (callLogs, index) => {
        return(
            <tr key={index}>
                <td onClick={() => handleTableClick(callLogs)}>{callLogs._id}</td>
                <td onClick={() => handleTableClick(callLogs)}>{callLogs.phoneNumber}</td>
                <td onClick={() => handleTableClick(callLogs)}>{callLogs.callSummary}</td>
                <td onClick={() => handleTableClick(callLogs)}className='tableStyle'>{callLogs.entireCall}</td>
                <td onClick={() => handleDelete(callLogs)}>    
                    <Button variant="outline-danger">
                        Delete
                    </Button>
                </td>
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
                        <th>Delete?</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderData)}
                </tbody>
            </table>


            <h1>Database testing</h1>
            <p className="card-description">Made by: <code>#Koki's Kookies</code> </p>
            <table data-testid="display-table" className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Phone Call ID #</th>
                        <th>Phone Number</th>
                        <th  data-testid="summary-table">Summary</th>
                        <th>Call Transcript</th>
                        <th>Delete?</th>
                    </tr>
                </thead>
                <tbody>
                    {callLogs.map(renderLogs)}
                </tbody>
            </table>

            {/* model for dummy data */}
            {/* <Modal show={show} onHide={handleClose} info={tableData}>
                <Modal.Header closeButton>
                <Modal.Title><h4>{tableData.callerID}: {tableData.phone}</h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>{tableData.summary}</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Edit
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal> */}

            {/* model for database */}
            <Modal show={show} onHide={handleClose} info={tableData}>
                <Modal.Header closeButton>
                <Modal.Title><h4>{tableData._id}: {tableData.phoneNumber}</h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>{tableData.entireCall}</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Edit
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
