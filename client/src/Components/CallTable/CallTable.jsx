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
import { Player } from '@lottiefiles/react-lottie-player';
// import {Container, Row, Col} from 'react-bootstrap';

export default function CallTable(props) {
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [showAllLogs, setShowAllLogs] = useState(false);
    const [readOnly, setReadOnly] = useState(true);
    const [showEdit, setShowEdit] = useState(true);
    const [done, setDone] = useState(false)
    
    const defaultInfo = [{callerID: "Bryan", calling_phone_number:"12345", callSummary:"dummy data", sentiment:"default"}]
    const [tableData, setTableData] = useState(defaultInfo);
    const [transactions, setTransactions] = useState( [] );
    const [choice, setChoice] = useState("calling_phone_number");
    const [sentiment, setSentiment] = useState("");
    const [searchText, setSearchText] = useState("");
    const [saving, setSaving] = useState(false);

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
    
    const handleTransactions = (transactions) => {
        // console.log(lastId);
        sessionStorage.setItem('transactions', JSON.stringify(transactions));
        setTransactions(transactions);
      };

    const getTransactions = () => {
        const transactions = sessionStorage.getItem('transactions');
        const transactionsParsed = JSON.parse(transactions);
        // console.log(transactionsParsed);
        if(transactionsParsed!=null){
            setTransactions(transactionsParsed);
        }
    };

    // fetch call logs for table
    const getLogs = async () => {
        try{
            let parsed = getLastId();
            getTransactions();
            // console.log("inside getLogs");
            // console.log("curr lastid");
            // console.log(parsed);
            let currLastId = await axios.post('transactions/invoca', { id: parsed});
            // console.log("recieved lastid");
            // console.log(currLastId.data);

            // if the current table already has all the logs necessary
            if(currLastId.data !== ""){
                handleLastId(currLastId.data);
                let tmp = "transactions/all/" + props.user[Object.keys(props.user)[0]];
                const logs = await axios.get(tmp);
                for (let i = 0; i < logs.data.length; i++){
                    let tmp1 = logs.data[i].transcript.toString();
                    logs.data[i].transcript = tmp1.split(",").join('\n');

                    let tmp2 = logs.data[i].keywords.toString();
                    logs.data[i].keywords = tmp2.split(",").join('\n');
                };
                handleTransactions(logs.data);
            }

            // console.log(logs.data);       
            setShowAllLogs(false);
            setSearchText("");
            setChoice("calling_phone_number");
            setDone(true);
        }catch(err){
            console.log(err);
        }
    };

    // const getMongoLogs = async () => {
    //     try{
    //         let tmp = "transactions/all/" + props.user[Object.keys(props.user)[0]];
    //         const logs = await axios.get(tmp);
    //         for (let i = 0; i < logs.data.length; i++){
    //             let tmp1 = logs.data[i].transcript.toString();
    //             logs.data[i].transcript = tmp1.split(",").join('\n');

    //             let tmp2 = logs.data[i].keywords.toString();
    //             logs.data[i].keywords = tmp2.split(",").join('\n');
    //         };
    //         handleTransactions(logs.data);
    //     }catch(err){
    //         console.log(err);
    //     }
    // }

    // fetch all call logs for table
    useEffect(() => {
        getLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // displays modal with more table information
    const handleTableClick = (data) => {
        setShow(true);
        setTableData(data);
        setSentiment(data.sentiment)
        props.clearCallLog();
        props.handleCallLog(data);
    }

    // const handleEditClick = (data) => {
    //     // console.log("in handle edit");
    //     // console.log(data);
    //     props.handleCallLog(data);
    //     history.push("/editCall");
    // }
    
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
                sessionStorage.setItem('transactions', JSON.stringify(newLogs.data));
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
                {/* <td className="hidden" onClick={() => handleTableClick(transactions)}>{transactions._id}</td> */}
                {/* <td onClick={() => handleTableClick(transactions)}>{transactions.transaction_id}</td> */}
                <td className="hidden" onClick={() => handleTableClick(transactions)}>{transactions.calling_phone_number}</td>
                <td className="hidden" onClick={() => handleTableClick(transactions)}>{transactions.keywords}</td>
                <td onClick={() => handleTableClick(transactions)}>{transactions.summary}</td>
                {/* <td onClick={() => handleTableClick(transactions)}>{transactions.keywords}</td> */}
                

                {/* <td className="hidden tableStyle" onClick={() => handleTableClick(transactions)} >{transactions.transcript}</td> */}
                <td className={`${(transactions.sentiment === "Very Negative") ? 'very-neg' : (transactions.sentiment === "Negative" ? 'neg' : (transactions.sentiment === "Very Positive" ? ("very-pos"): (transactions.sentiment === "Positive" ? 'pos':'neutral')))} hidden` } onClick={() => handleTableClick(transactions)}>{transactions.sentiment}</td>
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
        setReadOnly(true);
        setShowEdit(true);
        setSaving(true);
        try{
            const logs = await axios.put("transactions/"+ tableData._id, {
                transcript: tableData.transcript,
                sentiment: sentiment,
                summary: tableData.summary,
                keywords: tableData.keywords,
            });
            const transactions = sessionStorage.getItem('transactions');
            const transactionsParsed = JSON.parse(transactions);
            console.log(transactionsParsed);
            if(transactionsParsed!=null){
                for(let i = 0; i < transactionsParsed.length; i++){
                    if(transactionsParsed[i]._id === logs.data._id){
                        console.log(transactionsParsed[i]);
                        console.log(logs.data);
                        transactionsParsed[i] = logs.data;
                        console.log(transactionsParsed[i]);
                        sessionStorage.setItem('transactions', JSON.stringify(transactionsParsed));
                        break;
                    }
                }
            }
            console.log("saving data: ", logs.data);
        } catch(err){
            console.log(err);
        }
        getLogs();
        handleClose();
        setSaving(false);
    }

    // ensures that tableData.entireCall is editable
    const handleChange = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        setTableData(values => ({...values, [name]: value}))
    }

    const handleSentimentChange = (e) => {
        setSentiment(e.target.value);
        console.log('sentiment = ', sentiment);
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
            console.log("search submit params:", choice, searchText);
            setTransactions(logs.data);
            setShowAllLogs(true);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className='homepagebackground'>
            {/* <div>
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
            </div> */}
            <div className="breakheight">
                <br></br>
            </div>
            <Container>
                <Form className="mb-3"> 
                    <Row>
                        <Col md={2} lg={2}>
                            <Form.Group>
                                <Form.Select  Style="width: 100%" name="choice" defaultValue={choice} onChange={handleDropdownChange} className='dropdownbar'>
                                    <option value="calling_phone_number">Phone Number</option>
                                    <option value="keywords">Keywords</option>
                                    <option value="sentiment">Sentiment</option>
                                    <option value="summary">Summary</option>
                                    <option value="transcript">Call Transcript</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6} lg={6}>
                            <Form.Group>
                                <Form.Control  Style="width: 100%" type="text" placeholder="Search call logs" name="search"  value={searchText} onChange={handleTextChange} className='searchbar'/>
                            </Form.Group>
                        </Col>
                        <Col md={2} lg={2}>
                            <Form.Group>
                                {showAllLogs 
                                ? <Button variant="outline-secondary" 
                                    className = "CallTableReturnButton"
                                    onClick={getLogs}  Style="width: 100%">
                                    Return
                                    </Button>
                                : <Button variant="primary" 
                                        onClick={handleSearchSubmit} 
                                        disabled={!searchText}
                                        className = "CallTableSearchButton"
                                        Style="width: 100%"
                                        >
                                    Search
                                    </Button> }     
                            </Form.Group>
                        </Col>
                        <Col md={2} lg={2}>
                            <Button variant="success" className="CallTableAddButton" Style="width: 100%" onClick={() => history.push('/add')}>
                                Add Call
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
            <div>
            <br></br>

            </div>
            <Container className="temptest">
                <div className='tablehold'>
                    {!done ? (
                        <Player
                            autoplay
                            loop
                            speed = ".5"
                            src= "https://assets2.lottiefiles.com/packages/lf20_h1cidhml.json"
                            style = {{height: '400px'}}
                            />
                    ) : (
                    <table data-testid="display-table" className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th className="smallcolumn">Phone Number</th>
                                <th className="smallcolumn">Keywords</th>
                                <th  data-testid="summary-table" className="evenpercent">Summary</th>
                                <th className="smallcolumn">Sentiment</th>
                                <th style={{width: '10%'}}>Delete?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map(renderLogs)}
                        </tbody>
                    </table>
                    )}
                </div>
                    <Modal size="lg" show={show} onHide={handleClose} info={tableData} scrollable={true} >
                        {!saving ? (<Modal.Body Style="background: #63B8A7; border:none">
                            <Form.Group >
                                <Form.Label>Call Transcript:</Form.Label>
                                <Form.Control as="textarea" rows={10} 
                                        type="text" onChange={handleChange} 
                                        defaultValue={tableData.transcript} placeholder="Call transcription" 
                                        readOnly={readOnly} name="transcript"/>           
                                <br />     
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Summary:</Form.Label>
                                <Form.Control as="textarea" rows={2} 
                                        type="text" onChange={handleChange} 
                                        defaultValue={tableData.summary} placeholder="summary" 
                                        readOnly={readOnly} name="summary"/>     
                                <br />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Keywords: </Form.Label>
                                <Form.Control as="textarea" rows={2} 
                                        type="text" onChange={handleChange} 
                                        defaultValue={tableData.keywords} placeholder="keywords" 
                                        readOnly={readOnly} name="keywords"/>          
                                <br />     
                            </Form.Group>
                            <Form.Group >
                                <Form.Label>Sentiment Analysis:</Form.Label>
                                <Form.Select name="sentiment" defaultValue={tableData.sentiment} onChange={handleSentimentChange} disabled={readOnly}>
                                    <option value="Very Negative">Very Negative</option>
                                    <option value="Negative">Negative</option>
                                    <option value="Neutral">Neutral</option>
                                    <option value="Positive">Positive</option>
                                    <option value="Very Positive">Very Positive</option>
                                </Form.Select>        
                            </Form.Group>
                        </Modal.Body>) :
                        (
                            <Player
                            autoplay
                            loop
                            speed = ".5"
                            src= "https://assets2.lottiefiles.com/packages/lf20_h1cidhml.json"
                            style = {{height: '400px'}}
                            />
                        )}
                        <Modal.Footer Style="background: #63B8A7; border:none">
                        
                        {/* <Button variant="primary" onClick={()=>handleEditClick(tableData)}> Edit </Button> */}
                        {showEdit 
                            ? <Button variant="primary" onClick={handleEdit}>Edit</Button> 
                            : <Button variant="success" onClick={handleSave}>Save</Button>}
                        <Button variant="secondary" onClick={handleClose}> Close </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            <div>
                <br></br>
            </div>

        </div>
    )
}
