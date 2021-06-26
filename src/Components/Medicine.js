import react from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import axios from 'axios';

class Medicine extends react.Component{
    constructor(props){
        super(props);
        this.state={
            medicineData: [],

        }
    }




    // axios.get('https://api.fda.gov/drug/event.json?limit=3').then(response=>{

    // })

    render(){
        return(
            <div>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Medicine name</Form.Label>
              <Form.Control type="text" placeholder="Enter Medicine name" />
            </Form.Group>
        
            <Button variant="primary" type="submit">
              search
            </Button>
          </Form>
{/* 
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
  <Card.Title>Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card> */}

</div>



        )
    }
}


export default Medicine;