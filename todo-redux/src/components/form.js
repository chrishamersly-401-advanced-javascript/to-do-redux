import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function TodoForm(props) {

  const [item, setItem] = useState([]);
//   const handleInput = {
//     onChange: (event) => {
//       event.persist();
//       setValues(values => ({ ...values, [event.target.name]: event.target.value }));
//     }
//   }

//   return [
//     handleSubmit,
//     handleInput,
//     handleChange,
//     values,
//   ];
// };
  const handleSubmit = (event) => {
    event.preventDefault();
    // event.reset();
    props.handleSubmit(item);
    setItem({});
    console.log(item, 'item')
  };

  const handleInputChange = (event) => {
    setItem({...item, [event.target.name]: event.target.value });
  };



  return (
    <Card>
      <Card.Body>
         <h3> Add Item </h3>
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicTasks">
            <Form.Label>To Do Item</Form.Label>
            <Form.Control name="task" placeholder="Add To Do List Item" onChange={handleInputChange}/>
            <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
          <Form.Group controlId="formBasicTasks">
            <Form.Label>Assigned To </Form.Label>
            <Form.Control name="assignee" placeholder="Assignee" onChange={handleInputChange}/>
            <Form.Text className="text-muted">
    </Form.Text>
          </Form.Group>
          <Form.Group controlId="formDifficulty">
            <Form.Control type="range" min="0" max="5" name="difficulty" onChange={handleInputChange}/>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}


// export default TodoForm;