import react from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
;

class DoctorModal extends react.Component{
    constructor(props){
        super(props);
        this.state={
            modalStatus: this.props.modalStatus,
            date:'',
            desc:'',
            appointData: [],
            errorModal: false

        }
    }

    appoint=(event)=>{
        event.preventDefault();
        const reqBody = {
            email: this.props.auth0.user.email,
            doctor:{
                nameDoctor: this.props.value.nameDoctor,
                age: this.props.value.age,
                specialty: this.props.value.specialty,
                location: this.props.value.location,
                imgurl: this.props.value.imgurl,
                date:this.state.date,
                desc:this.state.desc
            }
        } 

        axios.post(`${process.env.REACT_APP_SERVER_URL}/doctor`, reqBody).then(response => {
          console.log(response);
          if (response.data === 'busy') {
            this.setState({
              errorModal: true
          })
          }else{
            this.setState({
              appointData: response.data.doctor
          })
          }
        }).catch(error =>
            alert(error.message)
        )

    }

    


    render(){
        return(

<div>
            <Modal
            show={this.state.modalStatus}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                Appointment
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src={this.props.value.imgurl} fluid />
              <h2>Dr. {this.props.value.nameDoctor}</h2>
              <h4>specialty : {this.props.value.specialty}</h4>
              <h4>location : {this.props.value.location}</h4>

              <Form onSubmit={(event)=>{this.setState({modalStatus:false});this.appoint(event)}}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Choose The Date</Form.Label>
    <Form.Control type="date" onChange={(e)=>this.setState({date:e.target.value})}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Express Your Case</Form.Label>
    <Form.Control as="textarea" rows={3}  onChange={(e)=>this.setState({desc:e.target.value})}/>
  </Form.Group>
  <Button variant="primary" type="submit">Appoint</Button>
</Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={(e)=>this.props.modalClose(e)}>Close</Button>
            </Modal.Footer>
          </Modal>



          <Modal show={this.state.errorModal} >
        <Modal.Header>
          <Modal.Title style={{color:'red'}}>Appointment Faild</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sorry the doctor is unavailable at that date</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>this.setState({errorModal:false})}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>




          </div>
        )
    }
}

export default withAuth0(DoctorModal);