import React from 'react';

import TodoForm from '../form/form.js';
import TodoList from '../list/list.js';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './todo.scss';
import useToDo from '../hooks/toDoHook.js';



function ToDo() {

  const {list, addItem, deleteItem, toggleComplete} = useToDo('http://localhost:3001/api/v1/todos')

 
  return (
    <>
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
                deleteItem={deleteItem}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default ToDo;
