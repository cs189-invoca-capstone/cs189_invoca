import React, { useState } from 'react';
import {Button, Form, Container, Row} from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './EditForm.css';


export default function EditForm(props) {
    const [inputs, setInputs] = useState(props.currCallLog);
    const history = useHistory();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const resetForm = () => { 
        setInputs({});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            // swap 0 with actual call id once we extract it from login
            // and once the databse actually stores the user ID
            const logs = await axios.put("transactions/"+props.currCallLog._id , {
                calling_phone_number: inputs.calling_phone_number,
                transcript: inputs.transcript,
                summary: inputs.summary,
                sentiment: inputs.sentiment,
                keywords: inputs.keywords
            });
            console.log(logs.data);
            const transactions = sessionStorage.getItem('transactions');
            const transactionsParsed = JSON.parse(transactions);
            console.log(transactionsParsed);

            if(transactionsParsed!=null){
                for(let i = 0; i < transactionsParsed.length; i++){
                    if(transactionsParsed[i]._id === props.currCallLog._id){
                        console.log(transactionsParsed[i]);
                        console.log(logs.data);
                        transactionsParsed[i] = logs.data;
                        console.log(transactionsParsed[i]);
                        sessionStorage.setItem('transactions', JSON.stringify(transactionsParsed));
                        break;
                    }
                }
            }
            
            history.push("/callLogs");
        }catch(err){
            console.log(err);
        }
        alert("Updated!");
        resetForm();
    }

    return (
        <div className="backgroundSubmit">
            <div className="boxSubmit">
                <br></br>

                <Container>
                    <Row>
                        <Form onSubmit={handleSubmit} id="submit-form">
                            <Row>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" name="calling_phone_number" defaultValue={props.currCallLog.calling_phone_number} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Keywords</Form.Label>
                                    <Form.Control type="text" name="keywords" defaultValue={props.currCallLog.keywords} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Summary</Form.Label>
                                    <Form.Control type="text" name="summary" defaultValue={inputs.summary} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Call Transcript</Form.Label>
                                    <Form.Control type="text" name="transcript" defaultValue={props.currCallLog.transcript} onChange={handleChange} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Call Sentiment: {props.currCallLog.sentiment}</Form.Label>
                                    <Form.Select name="sentiment" value={inputs.sentimentAnalysis} onChange={handleChange} className='dropdownbar'>
                                        <option>Select...</option>
                                        <option value="Very Negative">Very Negative</option>
                                        <option value="Negative">Negative</option>
                                        <option value="Neutral">Neutral</option>
                                        <option value="Positive">Positive</option>
                                        <option value="Very Positive">Very Positive</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Button Style="width:10%; margin-left:45%; margin-right:45%;" variant="primary" type="submit" disabled={!inputs.calling_phone_number || !inputs.transcript || !inputs.summary || !inputs.sentiment || !inputs.keywords}>
                                    Submit
                                </Button>
                            </Row>
                        </Form>
                    </Row>
                    <br></br>
                </Container>
                <Button Style="width:14%; margin-left:43%; margin-right:43%;" variant="secondary" onClick = {() => history.push("/callLogs")}>
                    Exit
                </Button>
            </div>
        </div>
    )
}
