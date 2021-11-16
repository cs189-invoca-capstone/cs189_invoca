import React from 'react';
import './SearchBar.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


const SearchBar = () => (
    <div>
        <div>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="">Phone Number</Dropdown.Item>
            <Dropdown.Item href="">Call Summary</Dropdown.Item>
            <Dropdown.Item href="">Call Transcript</Dropdown.Item>
        </DropdownButton>
        </div>
        <div>
        <Form action="/" method="get" className="mb-3"> 
            <Form.Label htmlFor="header-search"></Form.Label>
            <Form.Control type="text" placeholder="Search call logs" name="search"/>
            <Button variant="primary" type="submit">
                    Search
            </Button>
        </Form>
        </div>    
    </div>
);

export default SearchBar;