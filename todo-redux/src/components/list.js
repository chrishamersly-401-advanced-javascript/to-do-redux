import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

export default function ToDoList (props) {

 
    return (
      <ListGroup>
        {props.list.map(item => (
          <ListGroup.Item action variant={item.complete ? "success" : "danger"}
            key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}> 
              {item.text}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  
}

