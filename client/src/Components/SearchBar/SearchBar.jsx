import React from 'react';
import './SearchBar.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { useState } from 'react';

const SearchBar = () => {
    // choice is the variable set for the parameter choice
    const [choice, setChoice] = useState("placeholder");

    const handleChange = (e) => {
        setChoice(e.target.value);
    }

    const handleSubmit = async () => {
        try{
            // put in backend search call here
            console.log("inside handleSubmit")
        }catch(err){
            console.log(err);
        }
    }

    return (
    <div>
        <p>{choice}</p>
        <Container>
            <Form onSubmit={handleSubmit} className="mb-3"> 
                <Row>
                    <Form.Group as={Col} xs={3}>
                        <Form.Select name="type" onChange={handleChange}>
                            <option value="_id">Phone Call ID #</option>
                            <option value="phoneNumber">Phone Number</option>
                            <option value="callSummary">Summary</option>
                            <option value="entireCall">Call Transcript</option>
                            <option value="sentimentAnalysis">Sentiment</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} xs={8}>
                        <Form.Control type="text" placeholder="Search call logs" name="search"/>
                    </Form.Group>
                    <Form.Group as={Col} xs={1}>
                        <Button variant="primary" type="submit">
                                Search
                        </Button>
                    </Form.Group>
                </Row>
            </Form>
        </Container>
        </div>  
    )  
};

export default SearchBar;