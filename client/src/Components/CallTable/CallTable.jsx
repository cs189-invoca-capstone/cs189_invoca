import React from 'react';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// import SearchBar from '../SearchBar/SearchBar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./CallTable.css";
// import {Container, Row, Col} from 'react-bootstrap';

export default function CallTable(props) {
    const [show, setShow] = useState(false);
    const [showAllLogs, setShowAllLogs] = useState(false);
    const [readOnly, setReadOnly] = useState(true);
    const [showEdit, setShowEdit] = useState(true);

    const defaultInfo = [{callerID: "Bryan", calling_phone_number:"12345", callSummary:"dummy data", status:"default"}]
    const [tableData, setTableData] = useState(defaultInfo);
    const [transactions, setTransactions] = useState( [] );
    const [choice, setChoice] = useState("");
    const [searchText, setSearchText] = useState("");

    const handleClose = () => {
        setReadOnly(true);
        setShow(false);
        setShowEdit(true);
    }

    // fetch call logs for table
    const getLogs = async () => {
        try{
            const fetchFromInvoca = await axios.post('transactions');
            let tmp = "transactions/all/" + props.user[Object.keys(props.user)[0]];
            const logs = await axios.get(tmp);
            // console.log(logs.data);                
            setTransactions(logs.data);
            setShowAllLogs(false);
            setSearchText("");
            setChoice("");
        }catch(err){
            console.log(err);
        }
    };

    // fetch all call logs for table
    useEffect(() => {
        getLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    await axios.delete('transactions/' + data._id)
                    .then(response => console.log('Delete successful'))
                    .catch(error => {
                        console.error('There was an error!', error);
                    });
                }
                deletePost();
                let tmp = "transactions/all/" + props.user[Object.keys(props.user)[0]];
                const newLogs = await axios.get(tmp);
                setTransactions(newLogs.data);
            }catch(err){
                console.log(err);
            }
        };
        deleteLog();
    }
        
    // shows all logs and adds logic to clicks
    const renderLogs = (transactions, index) => {
        return(
            <tr Style="cursor: pointer;" key={index}>
                <td onClick={() => handleTableClick(transactions)}>{transactions._id}</td>
                {/* <td onClick={() => handleTableClick(transactions)}>{transactions.transaction_id}</td> */}
                <td onClick={() => handleTableClick(transactions)}>{transactions.calling_phone_number}</td>
                <td onClick={() => handleTableClick(transactions)}>{transactions.callSummary}</td>
                <td onClick={() => handleTableClick(transactions)} className='tableStyle'>{transactions.transcript}</td>
                <td onClick={() => handleDelete(transactions)}>    
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

    // calls put method to save new data into database
    const handleSave = async () => {
        setReadOnly(true)
        setShowEdit(true)
        try{
            const logs = await axios.put("transactions/"+ tableData._id, {
                entireCall: tableData.entireCall
            });
            console.log(logs.data);
        } catch(err){
            console.log(err);
        }
        getLogs();
        handleClose();
    }

    // ensures that tableData.entireCall is editable
    const handleChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        setTableData(values => ({...values, [name]: value}))
    }

    const handleDropdownChange = (e) => {
        setChoice(e.target.value);
    }

    const handleTextChange = (e) => {
        setSearchText(e.target.value);
    }

    const handleSearchSubmit = async () => {
        try{
            let tmp = "transactions/search/" + props.user[Object.keys(props.user)[0]];
                const logs = await axios.get(tmp, {
                    params: {
                        searchType: choice,
                        searchQuery: searchText
                    }              
                }
            );
            setTransactions(logs.data);
            // console.log(logs.data);
            setShowAllLogs(true);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <div>
            <br></br>
            </div>
            <Button Style="width:14%; margin-left:43%; margin-right:43%;" variant="success" onClick = {() => props.handleRouteChange('profile')} href="">
                Check your profile
            </Button>  
            <div>
            <br></br>
            </div>
        <Container>
            <Form className="mb-3"> 
                <Row>
                    <Col lg={3}>
                        <Form.Group>
                            <Form.Select name="choice" value={choice} onChange={handleDropdownChange}>
                                <option value="id">Phone Call ID #</option>
                                <option value="calling_phone_number">Phone Number</option>
                                <option value="callSummary">Summary</option>
                                <option value="transcript">Call Transcript</option>
                                <option value="sentimentAnalysis">Sentiment</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col lg={8}>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Search call logs" name="search"  value={searchText} onChange={handleTextChange}/>
                        </Form.Group>
                    </Col>
                    <Col lg={1}>
                        <Form.Group>
                            {showAllLogs 
                            ? <Button variant="outline-secondary" onClick={getLogs}>
                                Return
                                </Button>
                            : <Button variant="primary" 
                                    onClick={handleSearchSubmit} 
                                    disabled={!choice || !searchText}>
                                Search
                                </Button> }
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
            
        <Button Style="width:24%; margin-left:38%; margin-right:38%;" variant="primary" onClick = {() => props.handleRouteChange('add-new')} href="">
            Add new call summary
        </Button>
        <div>
            <br></br>
        </div>

        <Container>
            <Row>
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
                            {transactions.map(renderLogs)}
                        </tbody>
                    </table>
                </div>            
            </Row>

            <Modal size="lg" show={show} onHide={handleClose} info={tableData} scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>{tableData.calling_phone_number}: {tableData.callSummary}</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group >
                        <Form.Label>Call Transcript:</Form.Label>
                        <Form.Control as="textarea" rows={5} 
                                type="text" onChange={handleChange} 
                                value={tableData.transcript}placeholder="Call transcription" 
                                readOnly={readOnly} name="transcript"/>           
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                
                {showEdit 
                    ? <Button variant="primary" onClick={handleEdit}>Edit</Button> 
                    : <Button variant="success" onClick={handleSave}>Save</Button>}

                <Button variant="secondary" onClick={handleClose}> Close </Button>
                </Modal.Footer>
            </Modal>
        </Container>
        </div>
    )
}
