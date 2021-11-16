import React from 'react';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


export default function SubmitForm() {
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
                callSummary: inputs.callSummary
            });
            console.log(logs.data);
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

            <Button variant="primary" type="submit" disabled={!inputs._id || !inputs.phoneNumber || !inputs.entireCall || !inputs.callSummary}>
                Submit
            </Button>
        </Form>
        </div>
        <br></br>
        <div>
        <Link to={"/"}>
            <Button variant="secondary">
                Exit
            </Button>
        </Link> 
        </div>
        </>
    )
}