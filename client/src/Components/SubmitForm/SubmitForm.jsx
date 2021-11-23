import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';


export default function SubmitForm(props) {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const resetForm = () => { 
        setInputs({});
    }

    const handleSubmit = async () => {
        try{
            // swap 0 with actual call id once we extract it from login
            // and once the databse actually stores the user ID
            const logs = await axios.post("callLogs/", {
                userId: inputs._id,
                phoneNumber: inputs.phoneNumber,
                entireCall: inputs.entireCall,
                callSummary: inputs.callSummary,
                sentimentAnalysis: inputs.sentimentAnalysis
            });
            console.log(logs.data);
            props.handleRouteChange('home')
        }catch(err){
            console.log(err);
        }
        alert("Updated!");
        resetForm();
    }

    return (
        <>
        <div>
        <Form onSubmit={handleSubmit} id="submit-form">
            <Form.Group className="mb-3">
            <Form.Label>Caller log ID</Form.Label>
            <Form.Control type="text" name="_id" value={inputs._id} onChange={handleChange} placeholder="Enter caller log ID" />
            <Form.Text className="text-muted">
                Currently using 0 for testing.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" name="phoneNumber" value={inputs.phoneNumber} onChange={handleChange} placeholder="Enter phone number" />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Summary</Form.Label>
            <Form.Control type="text" name="callSummary" value={inputs.callSummary} onChange={handleChange} placeholder="Enter call summary" />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Call Transcript</Form.Label>
            <Form.Control type="text" name="entireCall" value={inputs.entireCall} onChange={handleChange} placeholder="Enter call transcript" />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Sentiment Analysis</Form.Label>
            <Form.Control type="text" name="sentimentAnalysis" value={inputs.sentimentAnalysis} onChange={handleChange} placeholder="Enter sentiment analysis" />
            <Form.Text className="text-muted">
                Sentiment takes in 0 or 1 (to be updated in future).
            </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!inputs._id || !inputs.phoneNumber || !inputs.entireCall || !inputs.callSummary || !inputs.sentimentAnalysis}>
                Submit
            </Button>
        </Form>
        </div>
        <br></br>
        <div>
            <Button variant="secondary" onClick = {() => props.handleRouteChange('home')} href="">
                Exit
            </Button>
        </div>
        </>
    )
}