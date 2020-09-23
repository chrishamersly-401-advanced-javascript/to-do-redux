import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
// import './header.scss'


export default props => (
  <header>
    <Navbar bg="primary" variant ="dark">
      <Nav className="mr-auto">
        <Nav.Link>Home</Nav.Link>
      </Nav>
    </Navbar>
    <Card id="darkMenu" bg="dark" text="light" style={{ width: '70rem' }}>
    <Card.Body>
      <Card.Title id="to-do-list-header"> ToDo List Manager (3) </Card.Title>
    </Card.Body>
  </Card>
  </header>
)