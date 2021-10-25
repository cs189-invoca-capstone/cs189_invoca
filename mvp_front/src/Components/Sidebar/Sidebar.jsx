import React from 'react'
// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
// import "../../App.scss";
import { Nav } from 'react-bootstrap';


export default function Sidebar() {
    return (
        <div>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
                // activeKey="/home"
                // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky">

                </div>
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
