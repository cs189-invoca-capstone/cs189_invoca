import React, { useState } from 'react';
import {Button, Form, Container, Row} from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './SubmitForm.css';

export default function SubmitForm(props) {
    const [inputs, setInputs] = useState({});
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
            const logs = await axios.post("transactions/new", {
                userId: props.user[Object.keys(props.user)[0]],
                calling_phone_number: inputs.phoneNumber,
                transcript: inputs.entireCall
            });
            console.log(logs.data);
            const transactions = sessionStorage.getItem('transactions');
            const transactionsParsed = JSON.parse(transactions);
            transactionsParsed.push(logs.data);
            sessionStorage.setItem('transactions', JSON.stringify(transactionsParsed));
            history.push("/callLogs");
        }catch(err){
            console.log(err);
        }
        alert("Updated!");
        resetForm();
    }

    return (
        <div className='backgroundregisterSubmit'>
        <div className='registersquareSubmit'>
        <div className='logintextSubmit'>Add Call</div>

        <Container>
            <Row>
                <Form onSubmit={handleSubmit} id="submit-form">
                    <Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control className="filloutbarsSub" type="text" name="phoneNumber" value={inputs.phoneNumber} onChange={handleChange} placeholder="" />
                        </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Call Transcript</Form.Label>
                        <Form.Control className="transcriptSubmit" as="textarea" rows={10} type="text" name="entireCall" value={inputs.entireCall} onChange={handleChange} placeholder="" />
                    </Form.Group>


                    </Row>
                    <Row>
                        <Button Style="width:35%; margin-left:11%; display:inline; margin-right: 10%; background:#08406B" variant="primary" type="submit" disabled={!inputs.phoneNumber || !inputs.entireCall}>
                            Submit
                        </Button>
                        <Button Style="width:35%; display:inline; background: #9C9C9C" variant="secondary" onClick = {() => history.push("/callLogs")}>
                            Exit
                        </Button>
                    </Row>
                </Form>

            </Row>
        <br></br>
        </Container>

        </div>
    </div>

    )
}