import React, { useState, useEffect } from 'react';

import TodoForm from './form.js';
import TodoList from './list.js';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';


function ToDo (props) {

  const [list, setList] = useState([]);


  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item] );
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList({ newList});
    }

  };


   useEffect( async () => {
  
  const response = await axios.get('http://localhost:3000/api/v1/todos');
    
    setList(response.data.results);
  }, []);
    // let list = [
    //   { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
    //   { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
    //   { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
    //   { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
    //   { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    // ];

 

  
    return (
      <>
        <header>
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col >
              <header>
                <Navbar bg="dark" variant="dark">
                  <Nav className="mr-auto">

                    <Navbar.Brand>To Do List Manager ({list.filter(item => !item.complete).length})
            </Navbar.Brand>
                  </Nav>
                </Navbar>
              </header>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div>
                <TodoForm handleSubmit={addItem} />
              </div>
            </Col>
            <Col md={8}>
              <div>
                <TodoList
                  list={list}
                  handleComplete={toggleComplete}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
}


export default ToDo;
