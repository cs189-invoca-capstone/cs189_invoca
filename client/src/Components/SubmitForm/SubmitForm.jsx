import React from 'react';

import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


export default function SubmitForm() {
    // const handleFormSubmit = () => {
    //     const addLog = async () => {
    //         try{
    //             // add in new data
    //             async function addPost() {
    //                 await axios.post('callLogs/')
    //                 .then(response => console.log('Added new log'))
    //                 .catch(error => {
    //                     console.error('There was an error!', error);
    //                 });
    //             }
            
    //             addPost();
    //         }catch(err){
    //             console.log(err);
    //         }
    //     };
    //     addLog();
    // }

    // return (
    //     <>
            // <Form>
            // <Form.Group className="mb-3">
            // <Form.Label>Phone log ID</Form.Label>
            // <Form.Control type="text" placeholder="Enter phone log ID" />
            // <Form.Text className="text-muted">
            //     Generally a long string of characters.
            // </Form.Text>
            // </Form.Group>

            // <Form.Group className="mb-3">
            // <Form.Label>Phone Number</Form.Label>
            // <Form.Control type="text" placeholder="Enter phone number" />
            // </Form.Group>

            // <Form.Group className="mb-3">
            // <Form.Label>Summary</Form.Label>
            // <Form.Control type="text" placeholder="Enter call summary" />
            // </Form.Group>

            // <Form.Group className="mb-3">
            // <Form.Label>Call Transcript</Form.Label>
            // <Form.Control type="text" placeholder="Enter call transcript" />
            // </Form.Group>


            // <Button variant="primary" onClick={handleFormSubmit} type="submit">
            //     Submit
            // </Button>
            // </Form>
    //     </>
    // )

    console.log("AM I HERE??");
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs._id +" "+ inputs.phoneNumber + " " + inputs.callSummary + " " + inputs.entireCall);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
            <Form.Label>Phone log ID</Form.Label>
            <Form.Control type="text" name="_id" value={inputs._id || ""} onChange={handleChange} placeholder="Enter phone log ID" />
            <Form.Text className="text-muted">
                Generally a long string of characters.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" name="phoneNumber" value={inputs.phoneNumber || ""} onChange={handleChange} placeholder="Enter phone number" />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Summary</Form.Label>
            <Form.Control type="text" name="callSummary" value={inputs.callSummary || ""} onChange={handleChange} placeholder="Enter call summary" />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Call Transcript</Form.Label>
            <Form.Control type="text" name="entireCall" value={inputs.entireCall || ""} onChange={handleChange} placeholder="Enter call transcript" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}