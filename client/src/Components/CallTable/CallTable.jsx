
import React from 'react';

// import ".././Style.css";
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Form from 'react-bootstrap/Form';
import "./CallTable.css";


export default function CallTable() {
    const [show, setShow] = useState(false);
    const [readOnly, setReadOnly] = useState(true);
    const [showEdit, setShowEdit] = useState(true);
    const defaultInfo = [{callerID: "Bryan", phone:"12345", summary:"dummy data", status:"default"}]
    const [tableData, setTableData] = useState(defaultInfo);
    const [callLogs, setCallLogs] = useState( [] );

    const handleClose = () => {
        setReadOnly(true);
        setShow(false);
    }
    // fetch all call logs for table
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

    // displays modal with more table information
    const handleTableClick = (data) => {
        setShow(true);
        setTableData(data);
    }
    
    // calls backend to delete row from table
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
        
    // shows all logs and adds logic to clicks
    const renderLogs = (callLogs, index) => {
        return(
            <tr Style="cursor: pointer;" key={index}>
                <td onClick={() => handleTableClick(callLogs)}>{callLogs._id}</td>
                <td onClick={() => handleTableClick(callLogs)}>{callLogs.phoneNumber}</td>
                <td onClick={() => handleTableClick(callLogs)}>{callLogs.callSummary}</td>
                <td onClick={() => handleTableClick(callLogs)} className='tableStyle'>{callLogs.entireCall}</td>
                <td onClick={() => handleDelete(callLogs)}>    
                    <Button variant="outline-danger">
                        Delete
                    </Button>
                </td>
            </tr>
        )
    }
    
    // hides edit button, shows save button
    const handleEdit = () => {
        setReadOnly(false)
        setShowEdit(false)
    }

    // refreshes the page to re-render the table
    const refreshPage = () => {
        window.location.reload(false);
    }

    // calls put method to save new data into database
    const handleSave = async () => {
        setReadOnly(true)
        setShowEdit(true)
        try{
            // swap 0 with actual call id once we extract it from login
            // and once the databse actually stores the user ID
            const logs = await axios.put("callLogs/"+ tableData._id, {
                entireCall: tableData.entireCall
            });
            console.log(logs.data);
        }catch(err){
            console.log(err);
        }
        alert("Saved!");
        handleClose();
        refreshPage();
    }

    // ensures that tableData.entireCall is editable
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setTableData(values => ({...values, [name]: value}))
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
            {/* <div>
                <SearchBar />
            </div> */}
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
                    <tbody>
                        {callLogs.map(renderLogs)}
                    </tbody>
                </table>
            </div>
            

            {/* modal for database */}
            <Modal size="lg" show={show} onHide={handleClose} info={tableData} scrollable={true}>
                <Modal.Header closeButton>
                <Modal.Title><h4>{tableData.phoneNumber}: {tableData.callSummary}</h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group >
                        <Form.Label>Call Transcript:</Form.Label>
                        <Form.Control as="textarea" rows={5} type="text" onChange={handleChange} value={tableData.entireCall} placeholder="Call transcription" readOnly={readOnly} name="entireCall"/>           
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                
                {showEdit ? <Button variant="primary" onClick={handleEdit}>Edit</Button> : <Button variant="success" onClick={handleSave}>Save</Button>}

                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
