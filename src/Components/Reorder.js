import react from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";


class Reorder extends react.Component{
    constructor(props){
        super(props);
        this.state={
            modalStatus:false,
            ammount:'',
            status:false
        }
    }


    addDrug=(event,value,ammount)=>{
        event.preventDefault();
        const reqBody = {
            email: this.props.auth0.user.email,
            medicine:{
                medicineName:value.medicineName,
                medicineDescription:value.medicineDescription,
                status:value.status,
                medicineImg:value.medicineImg,
                ammount:ammount,
            }}
        axios.post(`${process.env.REACT_APP_SERVER_URL}/drug`,reqBody).then(response=>{

            this.setState({
                userData: response.data
            })

        }).catch(
            error=>{
                alert(error.message)
            })
    }

    render(){
        return(
            <div>


            <Button variant="secondary"  onClick={()=>{this.setState({modalStatus:true})}}>Reorder</Button>


            <Modal
            show={this.state.modalStatus}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton onClick={()=>this.setState({modalStatus:false})}>
              <Modal.Title id="contained-modal-title-vcenter">
                Reorder
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src={this.props.value.medicineImg} fluid />
              <h2>medicine name: {this.props.value.medicineName}</h2>
              <h4>availability: {this.props.value.status}</h4>
              <h4>Description:</h4>
                <p>{this.props.value.medicineDescription}</p>

              <Form onSubmit={(event)=>{this.setState({modalStatus:false});this.addDrug(event,this.props.value)}}>
 
 
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <h4>how much do you need</h4>
  <RangeSlider
  min='0'
  max='10'
  size='lg'
      value={this.state.ammount}
      onChange={changeEvent => this.setState({ammount:changeEvent.target.value , status:true})}
    />
  </Form.Group>
  <Button variant="primary" type="submit">Add to my medicine</Button>
</Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={()=>this.setState({modalStatus:false})}>Close</Button>
            </Modal.Footer>
          </Modal>
            </div>

        )
    }
}

export default withAuth0(Reorder);