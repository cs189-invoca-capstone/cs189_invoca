import React from 'react';
import './SearchBar.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const SearchBar = () => {
    const [choice, setChoice] = useState("placeholder");

    const handleChange = (e) => {
        setChoice(e.target.value);
    }

    return (
    <div>
        <p>{choice}</p>
        <Form className="mb-3"> 
            <Form.Label htmlFor="header-search"></Form.Label>
            <Form.Select className="mb-3" name="type" onChange={handleChange}>
                <option value="_id">Phone Call ID #</option>
                <option value="phoneNumber">Phone Number</option>
                <option value="callSummary">Summary</option>
                <option value="entireCall">Call Transcript</option>
                <option value="sentimentAnalysis">Sentiment</option>
            </Form.Select>
            <Form.Control className="mb-3" type="text" placeholder="Search call logs" name="search"/>
            <Button variant="primary" type="submit">
                    Search
            </Button>
        </Form>
        </div>  
    )  
};

export default SearchBar;