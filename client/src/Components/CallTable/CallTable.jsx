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
import { useHistory } from 'react-router-dom';
// import {Container, Row, Col} from 'react-bootstrap';

export default function CallTable(props) {
    const history = useHistory();
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

    const handleLastId = (lastId) => {
        // console.log(lastId);
        sessionStorage.setItem('lastId', JSON.stringify(lastId));
      };

    const getLastId = () => {
        const lastId = sessionStorage.getItem('lastId');
        if(lastId == null){
            return "";
        }
        
        const lastIdParsed = JSON.parse(lastId);
        return lastIdParsed;
      };

    // fetch call logs for table
    const getLogs = async () => {
        try{
            let parsed = getLastId();
            // console.log("inside getLogs");
            // console.log("curr lastid");
            // console.log(parsed);
            let currLastId = await axios.post('transactions/invoca', { id: parsed});
            // console.log("recieved lastid");
            // console.log(currLastId.data);
            if(currLastId.data != ""){
                handleLastId(currLastId.data);
            }
            let tmp = "transactions/all/" + props.user[Object.keys(props.user)[0]];
            const logs = await axios.get(tmp);
            for (let i = 0; i < logs.data.length; i++){
                let tmp1 = logs.data[i].transcript.toString();
                logs.data[i].transcript = tmp1.split(",").join('\n');

                let tmp2 = logs.data[i].keywords.toString();
                logs.data[i].keywords = tmp2.split(",").join('\n');
            };
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
        props.clearCallLog();
        props.handleCallLog(data);
    }

    const handleEditClick = (data) => {
        // console.log("in handle edit");
        // console.log(data);
        props.handleCallLog(data);
        history.push("/editCall");
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
        // console.log(transactions.sentimentAnalysis)
        return(
            <tr Style="cursor: pointer;" key={index}>
                <td className="hidden" onClick={() => handleTableClick(transactions)}>{transactions._id}</td>
                {/* <td onClick={() => handleTableClick(transactions)}>{transactions.transaction_id}</td> */}
                <td className="hidden" onClick={() => handleTableClick(transactions)}>{transactions.calling_phone_number}</td>
                <td onClick={() => handleTableClick(transactions)}>{transactions.summary}</td>
                {/* <td onClick={() => handleTableClick(transactions)}>{transactions.keywords}</td> */}
                
                <td className="hidden" onClick={() => handleTableClick(transactions)} className='tableStyle'>{transactions.transcript}</td>
                <td className="hidden" onClick={() => handleTableClick(transactions)}>{transactions.sentiment}</td>
                <td className="hidden" onClick={() => handleDelete(transactions)}>    
                    <Button variant="outline-danger">
                        Delete
                    </Button>
                </td>
            </tr>
        )
    }
    
    /*
        MODAL STUFF
    */
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
                transcript: tableData.transcript
            });
            // console.log(logs.data);
        } catch(err){
            console.log(err);
        }
        getLogs();
        handleClose();
    }

    // ensures that tableData.entireCall is editable
    const handleChange = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        setTableData(values => ({...values, [name]: value}))
    }


    /*
    SEARCH BAR STUFF
    */
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
        <div className='homepagebackground'>
            <div>
                <br></br>
            </div>
            <div className='hellotext'>
                Hello {props.user.name ? props.user.name : props.user.email}
            </div>
            <div>
                <br></br>
            </div>
            <div className='welcometext'>
                Welcome Back!
            </div>
            <div>
                <br></br>
            </div>
            <Container>
                <Form className="mb-3"> 
                    <Row>
                        <Col lg={2}/>
                        <Col lg={2}>
                            <Form.Group>
                                <Form.Select name="choice" value={choice} onChange={handleDropdownChange} className='dropdownbar'>
                                    <option value="id">Phone Call ID #</option>
                                    <option value="calling_phone_number">Phone Number</option>
                                    <option value="callSummary">Summary</option>
                                    <option value="transcript">Call Transcript</option>
                                    <option value="sentimentAnalysis">Sentiment</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col lg={4}>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Search call logs" name="search"  value={searchText} onChange={handleTextChange} className='searchbar'/>
                            </Form.Group>
                        </Col>
                        <Col lg={3}>
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
            <div>
            <br></br>

            </div>
            <Container>
                <div className='tablehold'>
                    <table data-testid="display-table" className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Phone Call ID #</th>
                                <th>Phone Number</th>
                                <th  data-testid="summary-table" className="evenpercent">Summary</th>
                                <th>Call Transcript</th>
                                <th>Sentiment Analysis</th>
                                <th>Delete?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map(renderLogs)}
                        </tbody>
                    </table>
                </div>
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
                                        value={tableData.transcript} placeholder="Call transcription" 
                                        readOnly={readOnly} name="transcript"/>           
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Sentiment Analysis: {tableData.sentiment}</Form.Label>
                                        
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                        
                        <Button variant="primary" onClick={()=>handleEditClick(tableData)}> Edit </Button>
                        {/* {showEdit 
                            ? <Button variant="primary" onClick={handleEdit}>Edit</Button> 
                            : <Button variant="success" onClick={handleSave}>Save</Button>} */}
                        <Button variant="secondary" onClick={handleClose}> Close </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            <div>
                <br></br>
            </div>
            <Button Style="width:24%; margin-left:38%; margin-right:38%;" variant="primary" onClick = {() => history.push('/add')}>
                Add new call summary
            </Button>
        </div>
    )
}
