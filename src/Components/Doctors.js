import react from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Doctors extends react.Component{

    render(){
        return(
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Doctor name</Form.Label>
              <Form.Control type="text" placeholder="Enter Doctor name" />
            </Form.Group>
        
            <Button variant="primary" type="submit">
              search
            </Button>



          </Form>
        )
    }
}


export default Doctors;