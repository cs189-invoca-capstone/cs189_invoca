
import React from 'react';

// import ".././Style.css";
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import "./CallTable.css";


export default function CallTable() {
    const [show, setShow] = useState(false);
    const defaultInfo = [{callerID: "Bryan", phone:"12345", summary:"dummy data", status:"default"}]
    const [tableData, setTableData] = useState(defaultInfo);

    const [callLogs, setCallLogs] = useState( [] );

    const handleClose = () => setShow(false);

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

    const renderLogs = (callLogs, index) => {
        return(
            <tr Style="cursor: pointer;" key={index}>
                <td onClick={() => handleTableClick(callLogs)}>{callLogs._id}</td>
                <td className="pointer" onClick={() => handleTableClick(callLogs)}>{callLogs.phoneNumber}</td>
                <td className="pointer" onClick={() => handleTableClick(callLogs)}>{callLogs.callSummary}</td>
                <td onClick={() => handleTableClick(callLogs)} className='tableStyle pointer'>{callLogs.entireCall}</td>
                <td onClick={() => handleDelete(callLogs)}>    
                    <Button variant="outline-danger">
                        Delete
                    </Button>
                </td>
            </tr>
        )
    }

    return (
        <div>
            <h1>Database testing</h1>
            <p className="card-description">Made by: <code>#Koki's Kookies</code> </p>
            <div>
                <Link to={"/add-new"}>
                    <Button variant="primary">
                        Add new call summary
                    </Button>
                </Link> 
            </div>  
            <br>
            </br>
            <div>
                <SearchBar />
            </div>
            <div>
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
                    <tbody className="pointer">
                        {callLogs.map(renderLogs)}
                    </tbody>
                </table>
            </div>
            

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
        </div>
    )
}
