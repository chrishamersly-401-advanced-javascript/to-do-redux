import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Toast from 'react-bootstrap/Toast'

export default function ToDoList (props) {

 
    return (
      <ListGroup>
        {props.list.map(item => (
          <>
          <Toast>
            <Toast.Header> To Do
            </Toast.Header>
            <Toast.Body>
          
          <ListGroup.Item action variant={item.complete ? "success" : "danger"} key={item._id}>
            <span onClick={() => props.handleComplete(item._id)}> 
              <p>Task: {item.task} </p>
            </span>
            <p> Assignee: {item.assignee}</p>
            <p> Difficulty: {item.difficulty}</p>
           
            
          </ListGroup.Item>
          </Toast.Body>
          </Toast>
          </>
        ))}
      </ListGroup>
    );
  
}

